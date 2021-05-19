const express = require('express')
const exphbs = require('express-handlebars')
const routes = require('./routes')

const app = express()
const PORT = process.env.PORT || 3000

app.engine('handlebars', exphbs({ defaultLayout: 'main' }))
app.set('view engine', 'handlebars')

app.use(routes)

app.listen(PORT, () => {
  console.log(`App is listening on localhost:${PORT}`)
})
