const express = require('express')
const indexRouter = require('./routes/indexRouter')
const homeRouter = require('./routes/homeRouter')
const errorRouter = require('./routes/errorRouter')

const App = express()
const PORT = 80
 
App.set('view engine', 'ejs');
App.set('views', __dirname + '/views');

App.use(indexRouter)
App.use(homeRouter)
App.use(errorRouter)


App.listen(PORT, () => {
  console.log(`Running at http://localhost:${PORT}`)
})
