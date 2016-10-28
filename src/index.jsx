import {render} from 'react-dom'
import React from 'react';
import Radium from 'radium';

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
};

const state = 0;

const App = () =>{
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
