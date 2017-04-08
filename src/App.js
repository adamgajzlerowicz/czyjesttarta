import React from 'react';
import {Main} from './components/Main';
import {Obrazek} from './components/Obrazek';

export const App = ({onAdd, onSub, ...props}) => {
    return (
        <div>
            <Main onAdd={onAdd} onSub={onSub} {...props} />
            <Obrazek />
        </div>
    );
};