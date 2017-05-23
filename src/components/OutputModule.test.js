import React from 'react';
import { shallow } from 'enzyme';
import OutputModule from './InputModule';

const wrapper = shallow(<OutputModule />);

describe('OutputModule', () => {
  it('renders without exploding', () => {
    expect(wrapper.length).toEqual(1);
  });
});
