import React from 'react';
import {PropTypes} from 'prop-types';

const Bits = ({state, isLoading}) => {
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
                {state ? 'Jest tarta :)' : 'Nie ma tarty :('}
            </p>
        </div>
    );
};
Bits.propTypes = {
    state: PropTypes.number.isRequired,
    isLoading: PropTypes.bool.isRequired
};
export {
    Bits as default
};
