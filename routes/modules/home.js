const express = require('express')
const Url = require('../../models/url')
const urlExists = require('url-exists')
const shrinkUrl = require('../../tools/shrinkUrl')
const checkUrl = require('../../tools/checkUrl')
const router = express.Router()

// home page
router.get('/', (req, res) => {
  return Url.find()
    .lean()
    .then(url => {
      res.render('index', { url })
    })
})

// generate shorten Url
router.post('/shortUrls', (req, res) => {
  const { fullUrl } = req.body

  // 判斷是否為合法的網址
  urlExists(fullUrl, async (err, exists) => {
    if (exists) {
      // valid url
      // 判斷輸入的原始網址是否已存在資料庫內
      const fullExists = await Url.exists({ full: fullUrl })

      if (fullExists) {
        // Url 已存在

        // 找出已存在的短網址
        const selectedUrl = await Url.findOne({ full: fullUrl })
          .lean()
          .then(url => {
            return url
          })

        Url.find()
          .lean()
          .then(url => {
            res.render('index', { shortUrl: selectedUrl.short, fullUrl: selectedUrl.full, url })
          })
      } else {
        // Url 不存在
        // 產生不重複的短網址
        const shortUrl = await checkUrl(shrinkUrl())

        await Url.create({ full: fullUrl, short: shortUrl })
        Url.find()
          .lean()
          .then(url => {
            res.render('index', { shortUrl, fullUrl, url })
          })
      }
    } else {
      Url.find()
        .lean()
        .then(url => {
          const error = true
          res.render('index', { url, error, fullUrl })
        })
    }
  })
})

// 點擊表格中的縮網址，可連接到原始網站
router.get('/s/:shortUrl', (req, res) => {
  let { shortUrl } = req.params

  Url.findOne({ short: shortUrl })
    .lean()
    .then(url => {
      res.redirect(url.full)
    })
    .catch(err => console.log(err))
})

module.exports = router
