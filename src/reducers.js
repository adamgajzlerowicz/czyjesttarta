export default function reducers(state = {
    kawalki: 0,
    isLoading: true
}, action) {
    switch (action.type) {
    case 'INIT':
        return Object.assign({}, state, state.kawalki = action.value, state.isLoading = false);
    default:
        return state;
    }
}