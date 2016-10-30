export const add = () => {
    return {
        type: 'ADD'
    }
};
export const sub = () => {
    return {
        type: 'SUB'
    }
};
export const init = (val) => {
    return {
        type: 'INIT',
        value: {kawalki: val}
    }
};