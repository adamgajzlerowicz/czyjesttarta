import {render} from 'react-dom';
import React from 'react';
import {createStore, applyMiddleware} from 'redux';
import {Provider} from 'react-redux';
import {connect} from 'react-redux';
import thunk from 'redux-thunk';
import reducers from './reducers';
import {init, setKawalki} from './actions';
import {App} from './App';
import connectToFirebase from './connect';

const database = connectToFirebase.database();

const dataSource = database.ref('czyjesttarta');

dataSource.on('value', (snapshot) => {
    store.dispatch(init(snapshot.val()));
});


const store = createStore(
    reducers,
    applyMiddleware(thunk)
);

const mapStateToProps = (state) => {
    return state;
};

const mapDispatchToProps = (dispatch) => {
    return {
        setKawalki: (val) => {
            dispatch(setKawalki(val));
        }
    };
};


const AppWithStore = connect(
    mapStateToProps,
    mapDispatchToProps
)(App);

render((
    <Provider store={store}>
        <AppWithStore/>
    </Provider>
), document.getElementById('app'));
