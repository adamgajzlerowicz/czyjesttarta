var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);
var fetch = require('node-fetch');
const config = require('../config.json');

const sendSlack = () => {
    const content = {
        'text': 'Jest tarta!!\n\n <http://czyjesttarta.pl|Sprawdz> ile jeszcze zostalo!',
        'username': 'Dolores Abernathy'
    };

    fetch('https://hooks.slack.com/services/' + config.slack, {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(content)
    });
};

var state = 0;

const reducer = (state, action) => {
    switch (action) {
    case 'ADD':
        if(state == 0){
                // sendSlack();
        }
        return state + 1;
    case 'SUB':
        return state == 0 ? 0 : state - 1;
    }
    return state;
};


io.on('connection', function (socket) {
    socket.emit('state', state);
    socket.on('add', function () {
        state = reducer(state, 'ADD');
        io.emit('state', state);
    });

    socket.on('sub', function () {
        state = reducer(state, 'SUB');
        io.emit('state', state);
    });
});

http.listen(3000, function () {
    console.log('listening on *:3000');
});


