import React from 'react';
import { shallow } from 'enzyme';
import Header from './';
import Navigation from '../Navigation';

describe('<Header />', () => {
  it('renders without crashing', () => {
    shallow(<Header />);
  });
  it('renders an logo', () => {
    const wrapper = shallow(<Header />);
    expect(wrapper.find('.logo').length).toBe(1);
  });
  it('renders navigation', () => {
    const wrapper = shallow(<Header />);
    expect(wrapper.find(Navigation).length).toBe(1);
  });
});
