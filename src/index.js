import {render} from 'react-dom';
import React from 'react';
import {createStore, applyMiddleware} from 'redux';
import {Provider} from 'react-redux';
import {connect} from 'react-redux';
import thunk from 'redux-thunk';
import reducers from './reducers';
import {init} from './actions';
import {App} from './App';
var socket = require('socket.io-client')(window.location.hostname + ':3000');

const store = createStore(
    reducers,
    applyMiddleware(thunk)
);

const mapStateToProps = (state) => {
    return state;
};

const mapDispatchToProps = () => {
    return {
        onAdd: () => {
            socket.emit('add');
        },
        onSub: () => {
            socket.emit('sub');
        }
    };
};

socket.on('state', function (state) {
    store.dispatch(init(state));
});

const AppWithStore = connect(
    mapStateToProps,
    mapDispatchToProps
)(App);

render((
    <Provider store={store}>
        <AppWithStore />
    </Provider>
), document.getElementById('app'));