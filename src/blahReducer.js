import test from 'ava';

const FOO = 'FOOlkjsdf;lkajsdf';

const reducer = (state = {
    foo: [
        {name: 'mr F', title: 'strange man'}
    ]
}, action) => {
    switch (action.type) {
        case FOO:
            return {
                ...state,
                foo: [
                    ...state.foo,
                    action.payload
                ]

            };
        default:
            return state;
    }
};

test('Test Bits component', t => {
    const state = {
        foo: [
            {name: 'mr F', title: 'strange man'}
        ]
    };
    const expectedState = {
        foo: [
            {name: 'mr F', title: 'strange man'},
            {name: 'Batman', title: 'mr unknown'}
        ]
    };
    t.deepEqual(reducer(state, {
        type: FOO, payload: {
            name: 'Batman', title: 'mr unknown'
        }
    }), expectedState);
});
