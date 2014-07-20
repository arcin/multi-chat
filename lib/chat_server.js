var socketio = require('socket.io'),
    guestNumber = 1,
    nickNames = {},
    namesUsed = [],
    currentRoom = {},
    io;


