import {render} from 'react-dom'
import React from 'react';
import Radium from 'radium';
import {Result} from './Bits';

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


    const clickStyle = {
        padding: 20,
        color: 'black',
        fontSize: '70px'
    };

    const buttonsContainerStyle = {
        display: isLoading ? 'none' : 'block'
    };

    const loaderStyle = {
        display: !isLoading ? 'none' : 'block',
        color: 'white',
        fontSize: 25
    };

    const transitionsPositive = {
        transition: '1s ease-out',
        ':hover': {
            animation: 'x 3s ease 0s infinite',
            color:'#DAEFB3'
        }
    };

    const transitionsNegative = {
        transition: '1s ease-out',
        ':hover': {
            animation: 'x 3s ease 0s infinite',
            color:'#EF3E36'
        }
    };

    return (
        <div style={containerStyle}>
            <div style={innerContainerStyle}>
                <Result state={state} isLoading={isLoading} />
                <div style={buttonsContainerStyle}>
                    <a key={1} href="#" style={[clickStyle, transitionsNegative]} onClick={()=> {
                        onSub()
                    }}>-</a>
                    <span key={2} style={clickStyle}>{state}</span>
                    <a href="#" style={[clickStyle, transitionsPositive]} onClick={()=> {
                        onAdd()
                    }}>+</a>
                </div>
                <div style={loaderStyle} key={3}>
                    ...loading
                </div>
            </div>
        </div>
    )
};

export const Main = Radium(UnstyledMain);