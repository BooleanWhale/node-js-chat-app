var express = require('express')
var bodyParser = require('body-parser')
var app = express()
var http = require('http').Server(app)
var io = require('socket.io')(http)

app.use(express.static(__dirname))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: false}))

var messages = [
  {name: 'Jaqen', message: 'Fishie talk'},
  {name: 'PD', message: 'Fishie talk'}
]

app.get('/messages', (request, response) => {
  response.send(messages)
})

app.post('/messages', (request, response) => {
  messages.push(request.body)
  io.emit('message', request.body)
  response.sendStatus(200)
})

io.on('connection', (socket) => {
  console.log('a user has connected')
})

var server = http.listen(3000, () => {
  console.log('server listening to port', server.address().port)
})