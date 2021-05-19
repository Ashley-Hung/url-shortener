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
module.exports = router
