import React from 'react';
import { shallow } from 'enzyme';
import OutputItem from './InputModule';

const wrapper = shallow(<OutputItem />);

describe('OutputItem', () => {
  it('renders without exploding', () => {
    expect(wrapper.length).toEqual(1);
  });
});
