const Url = require('../models/url')
const shrinkUrl = require('./shrinkUrl')

/* check if the shortUrl is existing */
function checkUrl(shortUrl) {
  return Url.findOne({ short: shortUrl })
    .lean()
    .then(url => {
      if (url) {
        shortUrl = shrinkUrl()
        checkUrl(shortUrl)
      } else {
        return shortUrl
      }
    })
}

module.exports = checkUrl
