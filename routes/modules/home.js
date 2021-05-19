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

router.post('/shortUrls', async (req, res) => {
  const { fullUrl } = req.body
  console.log(shrinkUrl())
  const shortUrl = await shrinkUrl()
  await Url.create({ full: fullUrl, short: shortUrl })
  res.redirect('/')
})

router.get('/:shortUrl', (req, res) => {
  const { shortUrl } = req.params
  console.log(req.params)
  Url.findOne({ short: shortUrl }).then(url => {
    url.save()
    res.redirect(url.full)
  })
})

module.exports = router
