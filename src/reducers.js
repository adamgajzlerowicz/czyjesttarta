import connect from './connect';


const database = connect.database();


export default function reducers(state = {kawalki: 0, isLoading: true}, action) {
    console.log(action.type);
    switch (action.type) {
        case 'INIT':
            return Object.assign({}, state, state.kawalki = action.value, state.isLoading = false);
        case 'SUB':
            console.log(state);
            const newVal = state.kawalki <= 0 ? 0 : state.kawalki - 1;
            console.log(newVal);
            database.ref('czyjesttarta').set(newVal);
            Object.assign({}, state, {kawalki: newVal});
        default:
            return state;
    }
}
