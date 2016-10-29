import {render} from 'react-dom'
import React from 'react';
import Radium from 'radium';
import {createStore} from 'redux';
import {Provider} from 'react-redux';
import {connect} from 'react-redux';

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
function reducers(state = {kawalki: 0}, action) {
    switch (action.type) {
        case 'ADD':
            return Object.assign({}, {kawalki: state.kawalki + 1});
        case 'SUB':
            return state.kawalki === 0 ? state : Object.assign({}, {kawalki: state.kawalki - 1});
        default:
            return state
    }
}


let store = createStore(reducers, {kawalki: 0});

const App = ({onAdd, onSub, ...props}) => {
    const state = props.kawalki;

    const containerStyle = {
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
        backgroundColor: state === 0 ? 'rgba(250, 139, 96, .6)' : 'rgba(199, 239, 207, .6)',
        display: 'flex',
        width: '60%',
        height: '60%',
        flexDirection: 'column'
    };

    const resultStyle = {
        margin: 'auto',
        backgroundColor: '#000',
        color: '#90C5A9'
    };

    const clickStyle = {
        padding: 20,
        color: 'black',
        fontSize: '70px'
    };

    const pStyle = {
        fontSize: '70px',
        margin: 0,
        padding: '5px'
    };

    const buttonsContainerStyle = {
        margin: 'auto',
        height: 40
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
                        onAdd()
                    }}>+</a>
                    <span style={clickStyle}>{state}</span>
                    <a href="#" style={clickStyle} onClick={()=> {
                        onSub()
                    }}>-</a>

                </div>
            </div>
        </div>
    )
};

const StyledApp = Radium(App);

const mapStateToProps = (state) => {
    return state;
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
