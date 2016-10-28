import {render} from 'react-dom'
import React from 'react';
import Radium from 'radium';
import {createStore} from 'redux';
import {Provider} from 'react-redux';
import { connect } from 'react-redux';

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
            return ++state;
        case 'SUB':
            return state === 0 ? 0 : state--;
        default:
            return state
    }
}

let store = createStore(reducers, 0);
window.store = store;



const App = ({state, onAdd, onSub, ...props}) => {
    console.log(props);
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
        color: '#90C5A9'
    };

    return (
        <div style={containerStyle}>
            <div style={innerContainerStyle}>
                <div style={dialogStyle}>
                    <p style={{fontSize: '40px'}}>
                        {state ? "Jest Tarta!" : "Nie ma tarty"}
                    </p>
                    <a href="#" onClick={()=> {
                        store.dispatch(onAdd())
                    }}>+</a>
                    <a href="#" onClick={()=> {
                        store.dispatch(onSub())
                    }}>-</a>
                    {state}
                </div>
            </div>
        </div>
    )
};

const StyledApp = Radium(App);

const mapStateToProps = (state) => {
    return {
        state: 0
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        onAdd: () => {
            dispatch(add())
        },
        onSub: () => {
            dispatch(sub())
        }
    }
};

const AppWithStore = connect(
    mapStateToProps,
    mapDispatchToProps
)(StyledApp);

render((
    <Provider store={store}>
        <AppWithStore />
    </Provider>
), document.getElementById('app'));
