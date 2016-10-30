import {render} from 'react-dom'
import React from 'react';

export const Result = ({state, isLoading}) => {
    const resultStyle = {
        color: state === 0 ? '#EF3E36' : '#DAEFB3',
        display: isLoading ? 'none' : 'block'
    };

    const pStyle = {
        fontSize: '85px',
        margin: 0,
        padding: '5px'
    };

    return (
        <div style={resultStyle}>
            <p style={pStyle}>
                {state ? "Jest tarta :)" : "Nie ma tarty :("}
            </p>
        </div>
    )
};

export const Buttons = ({onAdd, onSub, isLoading, state}) => {
    const transitionsPositive = {
        transition: '1s ease-out',
        ':hover': {
            animation: 'x 3s ease 0s infinite',
            color:'#DAEFB3'
        }
    };
    const clickStyle = {
        padding: 20,
        color: 'black',
        fontSize: '70px'
    };
    const buttonsContainerStyle = {
        display: isLoading ? 'none' : 'block'
    };
    const transitionsNegative = {
        transition: '1s ease-out',
        ':hover': {
            animation: 'x 3s ease 0s infinite',
            color:'#EF3E36'
        }
    };
    return (
        <div style={buttonsContainerStyle}>
            <a href="#" style={[clickStyle, transitionsNegative]} onClick={()=> {
                onSub()
            }}>-</a>
            <span style={clickStyle}>{state}</span>
            <a href="#" style={[clickStyle, transitionsPositive]} onClick={()=> {
                onAdd()
            }}>+</a>
        </div>
    )
}
