var express, hello

express = require('express')
hello = express.Router()

hello.use(require('./hello-middleware'))

hello.get('/', function (req, res){
  var greeting
  greeting = 'Hello '
  greeting += req.user.name
  if (req.user.memberships.length > 0) {
    greeting += ', member of '
    greeting += req.user.memberships.join(',')
  }
  res.send(greeting)
})

module.exports = hello
