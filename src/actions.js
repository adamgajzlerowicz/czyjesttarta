import connect from './connect';
const database = connect.database();

export const setKawalki = (kawalki) => {

    database.ref('czyjesttarta').set(kawalki);

    return {
        type: 'SET_KAWALKI', payload: kawalki
    };
};

export const init = (val) => {
    return {
        type: 'INIT',
        value: {kawalki: val}
    };
};
