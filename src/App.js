import React from 'react';
import {Main} from './components/Main';
import {Obrazek} from './components/Obrazek';

export const App = ({setKawalki, ...props}) => {
    return (
        <div>
            <Main setKawalki={setKawalki} {...props} />
            <Obrazek />
        </div>
    );
};
