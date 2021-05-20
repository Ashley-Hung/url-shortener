const express = require('express')
const Url = require('../../models/url')
const shrinkUrl = require('../../public/javascripts/shrinkUrl')
const router = express.Router()

router.get('/', (req, res) => {
  return Url.find()
    .lean()
    .then(url => {
      res.render('index', { url })
    })
})

router.post('/shortUrls', async (req, res) => {
  const { fullUrl } = req.body
  const shortUrl = shrinkUrl()

  await Url.create({ full: fullUrl, short: shortUrl })
  Url.find()
    .lean()
    .then(url => {
      res.render('index', { shortUrl, fullUrl, url })
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
