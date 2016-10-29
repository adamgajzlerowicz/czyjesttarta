var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);

var state = 0;

io.on('connection', function(socket){
    console.log('connected', socket.handshake.headers.host);
    socket.emit('state',state);
    socket.on('add', function(){
        console.log('Adding. State is', state);
        state = state + 1;
        io.emit('state', state);
    });

    socket.on('sub', function(){
        console.log('Subtracting, State is', state);
        state = state === 0 ? 0 : state - 1;
        io.emit('state', state);
    });

});


http.listen(3000, function(){
    console.log('listening on *:3000');
});


