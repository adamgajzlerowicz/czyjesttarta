var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);
var fetch = require('node-fetch');
const config = require("../config.json");
var state = 0;

io.on('connection', function (socket) {
    console.log('connected', socket.handshake.headers.host);
    socket.emit('state', state);
    socket.on('add', function () {
        console.log('Adding. State is', state);
        state = state + 1;
        io.emit('state', state);
    });

    socket.on('sub', function () {
        console.log('Subtracting, State is', state);
        state = state === 0 ? 0 : state - 1;
        io.emit('state', state);
    });
});

const content = {
    "text": "Jest tarta!!\n\n <http://czyjesttarta.pl|Sprawdz> ile jeszcze zostalo!",
    "username": "Dolores Abernathy"
};
//
// fetch('https://hooks.slack.com/services/'+config.slack, {
//     method: 'POST',
//     headers: {
//         'Accept': 'application/json',
//         'Content-Type': 'application/json'
//     },
//     body: JSON.stringify(content)
// });

http.listen(3000, function () {
    console.log('listening on *:3000');
});


