var express, hello

express = require('express')
hello = express.Router()

hello.get('/', function (req, res){
  res.send('Hello ' + (req.query['id'] || 'World'))
})

module.exports = hello
