import React from 'react';
import { shallow } from 'enzyme';
import InputModuleContainer from './InputModule';

const wrapper = shallow(<InputModuleContainer/>);

describe('InputModule', () => {
  it('renders without exploding', () => {
    expect(wrapper.length).toEqual(1);
  });
});
