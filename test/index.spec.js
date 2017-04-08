import React from 'react';
import { expect } from 'chai';
import { mount, shallow } from 'enzyme';
import {Obrazek} from '../src/components/Obrazek';

describe('<Obrazek />', () => {
    it('calls componentDidMount', () => {
        const wrapper = shallow(<Obrazek />);
        expect(wrapper.find('div')).to.have.length(1);
    });
});