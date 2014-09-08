var express, app, server

express = require('express')
app = express()

app.get('/', function (req, res){
  res.send('Hello ' + (req.query['id'] || 'World'))
})

server = app.listen(3000, function () {
  console.log('Listening on port %d', server.address().port)
})
