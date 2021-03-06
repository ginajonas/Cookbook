const express = require('express')
var session = require('express-session')
var cookieParser = require('cookie-parser')
const mongoose = require('mongoose')

const app = express()
const PORT = process.env.PORT || 3001

// Define middleware here
app.use(express.urlencoded({ extended: true }))
app.use(express.json())
app.use(cookieParser())
app.use(session({ secret: 'Your secret key' }))
// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === 'production') {
  app.use(express.static('client/build'))
}
// Add routes, both API and view
app.use(require('./routes'))

// Connect to the Mongo DB
mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/cookbook')

// Start the API server
app.listen(PORT, function () {
  console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`)
})
