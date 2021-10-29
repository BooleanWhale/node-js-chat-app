// Module exports
exports.myText = "hello";

// module imports
var hello = require('./my-module.js');

// asyncronous readirectory
fs.readdir('/', (err, data) => {
  console.log(data)
})


// Create package manager (npm/package.json)
// this prevents huge overhead on repos
npm init

// excecute files
nodemon ./file.js

// Read file content (file, format, function)
fs.readFile('./fs-data.json', 'utf-8', (err, data) => {
  var data = JSON.parse
  console.log(data)
})

//create/write file (filename, content(MUST BE STRING), function)
fs.writeFile('data.json', JSON.stringify(data), (err) => {
  console.log('Write finished', err)
})


// NODE FRAMEWORKS (and APIs)
// Socket.io server - can push data from server to client


// Running a server with express
app.use(express.static(__dirname))
var server = app.listen(3000, () => {
  console.log('server listening to port', server.address().port)
})


// get/send data to front end with express
// server.js
app.get('/messages', (request, response) => {
  response.send(contentToSend)
})

app.post('/messages', (request, response) => {
  response.send(messages)
})
// index.html
function getMessages() {
  $.get('http://localhost:3000/messages', (data) => {
    data.forEach(addMessage);
  })
}


// get data from post
var bodyParser = require('body-parser')
app.use(bodyParser.json())

app.post('/messages', (request, response) => {
  messages.push(request.body)
  response.sendStatus(200)
})


// push new data to the client when available (with socket.io + express)
// -create a http node server and pass in the app
// -require socket.io and pass in the server
// -load socket.io on the font end and init
var http = require('http').Server(app)
var io = require('socket.io')(http)
io.on('connection', (socket) => { console.log('a user has connected') })
<script src="/socket.io/socket.io.js"></script>
<script defer>var socket = io()</script>
// NOTE: listens will have to be updated from app to the http server

// set up event to use data pushing
app.post('/messages', (request, response) => {
  messages.push(request.body)
  io.emit('message', request.body)
  response.sendStatus(200)
})
<script defer>socket.on('message', addMessage)</script>