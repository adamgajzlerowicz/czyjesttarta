import connect from './connect';

const database = connect.database();

export default function reducers(state = {kawalki: 0, isLoading: true}, action) {
    switch (action.type) {
        case 'INIT':
            return Object.assign({}, state, state.kawalki = action.value, state.isLoading = false);
        case 'SET_KAWALKI':
            return Object.assign({}, state, {kawalki: action.payload});
        default:
            return state;
    }
}
