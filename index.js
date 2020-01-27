const express = require('express')
const app = express()
const router = express.Router()
const bodyParser = require('body-parser')
const usersRoutes = require('./routes/users')
const port = process.env.PORT || 4000

app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json());
app.use('/users', usersRoutes)

app.use(express.static('public'))


app.listen(port, () => {
  console.log('app is listening on:', port)
})