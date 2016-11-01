import React from 'react';
import { shallow } from 'enzyme';
import MovieItem from './';

describe('<MovieItem />', () => {
  it('renders without crashing', () => {
    shallow(<MovieItem />);
  });
  it('renders correct info', () => {
    const wrapper = shallow(<MovieItem />);
    expect(wrapper.find('.movies-item').length).toBe(1);
  });
});
