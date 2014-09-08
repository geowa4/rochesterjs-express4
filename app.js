var express, app, server

express = require('express')
app = express()
app.use(require('morgan')('combined'))

app.get('/', function (req, res) {
  res.status(200).end()
})

app.use('/hello', require('./hello-router'))

server = app.listen(3000, function () {
  console.log('Listening on port %d', server.address().port)
})
