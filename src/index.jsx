import {render} from 'react-dom'
import React from 'react';
import Radium from 'radium';
import {createStore} from 'redux';

function add() {
    return {
        type: 'ADD'
    }
}
function sub() {
    return {
        type: 'SUB'
    }
}
function reducers(state = 0, action) {
    switch (action.type) {
        case 'ADD':
            return state++;
        case 'SUB':
            return state === 0 ? 0 : state--;
        default:
            return state
    }
}

let store = createStore(reducers, '1');


let unsubscribe = store.subscribe(() =>
    console.log(store.getState())
)

store.dispatch(add());

store.dispatch(add());
store.dispatch(add());

const App = () => {
    let state = 0;

    const containerStyle = {
        display: 'flex',
        flexDirection: 'row',
        position: 'fixed',
        top: 0,
        right: 0,
        bottom: 0,
        left: 0,
        width: '100%',
        height: '100%',
        backgroundImage: 'tarta.jpg'
    };

    const innerContainerStyle = {
        margin: 'auto',
        backgroundColor: '#FA8B60',
        display: 'flex',
        width: '95%',
        height: '95%',
    };

    const dialogStyle = {
        margin: 'auto',
        backgroundColor: '#000',
        color: '#90C5A9',
        fontSize: '40px'
    };

    return (
        <div style={containerStyle}>
            <div style={innerContainerStyle}>
                <div style={dialogStyle}>
                    {state ? "Jest Tarta!" : "Nie ma tarty"}
                </div>
            </div>
        </div>
    )
};

const StyledApp = Radium(App);

render((
    <StyledApp />
), document.getElementById('app'));
