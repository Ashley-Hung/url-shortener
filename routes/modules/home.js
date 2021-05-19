const express = require('express')
const router = express.Router()

router.get('/', (req, res) => {
  res.render('index')
})

router.post('/shortUrls', (req, res) => {})
module.exports = router
