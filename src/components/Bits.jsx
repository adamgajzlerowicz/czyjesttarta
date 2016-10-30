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
