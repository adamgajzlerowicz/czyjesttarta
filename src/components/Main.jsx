import {render} from 'react-dom'
import React from 'react';
import Radium from 'radium';
import {Result, Buttons} from './Bits';

const UnstyledMain = ({onAdd, onSub, ...props}) => {
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
    const loaderStyle = {
        display: !isLoading ? 'none' : 'block',
        color: 'white',
        fontSize: 25
    };



    return (
        <div style={containerStyle}>
            <div style={innerContainerStyle}>
                <Result state={state} isLoading={isLoading} />
                <Buttons onAdd={onAdd} onSub={onSub} isLoading={isLoading} state={state}/>
                <div style={loaderStyle}>
                    ...loading
                </div>
            </div>
        </div>
    )
};

export const Main = Radium(UnstyledMain);