import {render} from 'react-dom'
import React from 'react';
import Radium from 'radium';
import {createStore, applyMiddleware} from 'redux';
import {Provider} from 'react-redux';
import {connect} from 'react-redux';
import thunk from 'redux-thunk';
import {SocketProvider} from 'socket.io-react';
import io from 'socket.io-client';
import {Obrazek} from './components/Obrazek';

const socket = io.connect(window.location.hostname + ':3000');

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
function init(val) {
    return {
        type: 'INIT',
        value: {kawalki: val}
    }
}
function reducers(state = {
    kawalki: 0,
    isLoading: true
}, action) {
    switch (action.type) {
        case 'INIT':
            return Object.assign({}, state, state.kawalki = action.value, state.isLoading = false);
        default:
            return state
    }
}

const store = createStore(
    reducers,
    applyMiddleware(thunk)
);

const Main = ({onAdd, onSub, ...props}) => {
    const state = props.kawalki;
    const isLoading = props.isLoading;

    const containerStyle = {
        backgroundColor: 'rgb(14, 177, 210)',
        display: 'flex',
        flexDirection: 'row',
        position: 'fixed',
        top: 0,
        right: 0,
        bottom: 0,
        left: 0,
        width: '100%',
        height: '100%'
    };

    const innerContainerStyle = {
        margin: 'auto',
        backgroundColor: '#342E37',
        display: 'flex',
        width: '95%',
        height: '95%',
        flexDirection: 'column',
        justifyContent: 'space-around',
        alignItems: 'center'
    };

    const resultStyle = {
        color: state === 0 ? '#EF3E36' : '#DAEFB3',
        display: isLoading ? 'none' : 'block'
    };

    const clickStyle = {
        padding: 20,
        color: 'black',
        fontSize: '70px'
    };

    const pStyle = {
        fontSize: '85px',
        margin: 0,
        padding: '5px'
    };

    const buttonsContainerStyle = {
        display: isLoading ? 'none' : 'block'
    };

    const loaderStyle = {
        display: !isLoading ? 'none' : 'block',
        color: 'white',
        fontSize: 25
    };
    return (
        <div style={containerStyle}>
            <div style={innerContainerStyle}>
                <div style={resultStyle}>
                    <p style={pStyle}>
                        {state ? "Jest tarta :)" : "Nie ma tarty :("}
                    </p>
                </div>
                <div style={buttonsContainerStyle}>
                    <a href="#" style={clickStyle} onClick={()=> {
                        onSub()
                    }}>-</a>
                    <span style={clickStyle}>{state}</span>
                    <a href="#" style={clickStyle} onClick={()=> {
                        onAdd()
                    }}>+</a>
                </div>
                <div style={loaderStyle}>
                    ...loading
                </div>
            </div>
        </div>
    )
};


const App = ({onAdd, onSub, ...props}) => {
    return (
        <div>
            <Main onAdd={onAdd} onSub={onSub} {...props} />
            <Obrazek />
        </div>
    )
};

const StyledApp = Radium(App);

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
    }
};

socket.on('state', function (state) {
    store.dispatch(init(state));
});

const AppWithStore = connect(
    mapStateToProps,
    mapDispatchToProps
)(StyledApp);

render((
    <Provider store={store}>
        <AppWithStore />
    </Provider>
), document.getElementById('app'));

