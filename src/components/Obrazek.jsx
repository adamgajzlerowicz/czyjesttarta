import {render} from 'react-dom'
import React from 'react';
// const tlo = require('../../template/tarta.jpg');

export const Obrazek = () => {
    const style = {
        position: 'absolute',
        bottom: '20px',
        right: '20px',
        width: '200px',
        height: '200px',
        backgroundImage: 'url(tarta.jpg)',
        backgroundSize: 'cover'
    };
    return (
        <div style={style}></div>
    )
};