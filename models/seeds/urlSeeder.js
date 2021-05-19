const Url = require('../url')
const db = require('../../config/mongoose')
const urlList = require('./url.json')

db.once('open', () => {
  Url.create(...urlList.results)
    .then(() => {
      console.log('insert url done...')
      return db.close()
    })
    .then(() => {
      console.log('database connection close...')
    })
})
