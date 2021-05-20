const express = require('express')
const Url = require('../../models/url')
const urlExists = require('url-exists')
const shrinkUrl = require('../../public/javascripts/shrinkUrl')
const checkUrl = require('../../public/javascripts/checkUrl')
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

  urlExists(fullUrl, async (err, exists) => {
    if (exists) {
      let shortUrl = shrinkUrl()
      shortUrl = await checkUrl(shortUrl)

      await Url.create({ full: fullUrl, short: shortUrl })
      Url.find()
        .lean()
        .then(url => {
          res.render('index', { shortUrl, fullUrl, url })
        })
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

// 連到原始網站
router.get('/:shortUrl', (req, res) => {
  let { shortUrl } = req.params

  Url.findOne({ short: shortUrl })
    .lean()
    .then(url => {
      res.redirect(url.full)
    })
    .catch(err => console.log(err))
})

module.exports = router
