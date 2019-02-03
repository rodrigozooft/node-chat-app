var socket = io();

socket.on('connect', function () {
  console.log('Connected to server');

  socket.emit('createEmail', {
    to: 'jane@address.com',
    text: 'This is Andrew',
    Subject: 'I want to kill you'
  });

  socket.emit('createMessage', {
    from: 'jesus@octopull.us',
    text: 'Hello there, I am Jesus'
  });
});

socket.on('disconnect', function () {
  console.log('Disconnected from the server');
})

socket.on('newEmail', function (email) {
  console.log('New Email', email);
});

socket.on('newMessage', function(message){
  console.log('New Message', message);
})