import React from 'react';
import Radium from 'radium';
import Bits from './Bits';

const UnstyledMain = ({setKawalki, ...props}) => {
    const state = props.kawalki;
    const isLoading = props.isLoading;

    const containerStyle = {
        backgroundColor: 'rgb(14, 177, 210)',
        display: 'flex',
        flexDirection: 'row',
        position: 'relative',
        height: '100%'
    };

    const innerContainerStyle = {
        backgroundColor: '#342E37',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-around',
        alignItems: 'center',
        flex: '1',
        margin: 10
    };



    const size = screen.width >= 480 ? '70px' : '300px';

    const clickStyle = {
        padding: 20,
        color: 'black',
        fontSize:  size
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
                <Bits state={state} isLoading={isLoading} />
                <div style={buttonsContainerStyle}>
                    <a key={1} href="#" style={[clickStyle, transitionsNegative]} onClick={()=> {
                        setKawalki(state <= 0 ? 0 : state - 1);
                    }}>-</a>
                    <span key={2} style={clickStyle}>{state}</span>
                    <a href="#" style={[clickStyle, transitionsPositive]} onClick={()=> {
                        setKawalki(state + 1);
                    }}>+</a>
                </div>
                <div style={loaderStyle} key={3}>
                    ...loading
                </div>
            </div>
        </div>
    );
};

export const Main = Radium(UnstyledMain);
