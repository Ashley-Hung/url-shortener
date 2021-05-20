const express = require('express')
const { find } = require('../../models/url')
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

router.post('/shortUrls', (req, res) => {
  const { fullUrl } = req.body

  Url.create({ full: fullUrl, short: shrinkUrl() })
  res.redirect('/')
})

router.get('/:shortUrl', (req, res) => {
  const { shortUrl } = req.params

  Url.findOne({ short: shortUrl })
    .lean()
    .then(url => {
      res.redirect(url.full)
    })
    .catch(err => console.log(err))
})

module.exports = router
