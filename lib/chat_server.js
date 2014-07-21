var socketio = require('socket.io'),
    guestNumber = 1,
    nickNames = {},
    namesUsed = [],
    currentRoom = {},
    io;

exports.listen = function(server) {
  io = socketio.listen(server);
  io.set('log level', 1);

  io.sockets.on('connection', function(socket){
    guestNumber = assignGuestName(socket, guestNumber, nickNames, namesUsed);
    joingRoom(socket, 'Lobby');

    handleMessageBroadcasting(socket, nickNames);
    handleNameChangeAttempts(socket, nicknames, namesUsed);
    handleRoomJoining(socket);

    socket.on('rooms', function(){
      socket.emit('rooms', io.sockets.manager.rooms);
    });

    handleClieantDisconnection(socket, nickNames, namesUsed);
  });
}