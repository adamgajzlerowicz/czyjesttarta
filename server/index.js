var http = require('http').Server(app);

const state = 0;

io.on('connection', function(socket){
    socket.broadcast.emit(state);

    socket.on('+')
});

