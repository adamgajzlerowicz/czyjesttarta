import test from 'ava';
import Bits from './Bits';
import React from 'react';
import { mount } from 'enzyme';


test('Test Bits component', t => {
    const wrapper = mount(<Bits state={1} isLoading={false} />);
    t.is(wrapper.props().state, 1, 'props actually passed');
    // wrapper.setProps({ bar: 'foo' });
});
