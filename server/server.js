const path = require('path');
const http = require('http');
const express = require('express');
const socketIO = require('socket.io');

const publicPath = path.join(__dirname, '../public', );
const port = process.env.PORT || 3000;
var app = express();
var server = http.createServer(app);
var io = socketIO(server);

app.use(express.static(publicPath));

app.get('/', (req, res) => {
  res.sendFile('/ndex.html');
})

io.on('connection', (socket) => {
  console.log('New user connected');

  socket.emit('newEmail', {
    from: "mike@example.com",
    text: 'Hey. What is going on',
    createdAt: 1231  
  });

  socket.emit('newMessage', {
    from: 'mike@hello.com',
    text: 'My name is Mike',
    createdAt: 123412412
  });

  socket.on('createEmail', (newEmail) => {
    console.log('CreateEmail', newEmail);
  });

  socket.on('createMessage', (newMessage) => {
    console.log('CreateMessage', newMessage);
  })
  
  socket.on('disconnect', () => {
    console.log('User was disconnected');
  })
})

server.listen(port, () => {
  console.log('Serving server on port: ' + port);
})


