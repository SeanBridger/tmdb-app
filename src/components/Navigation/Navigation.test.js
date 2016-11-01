import React from 'react';
import { shallow } from 'enzyme';
import Navigation from './';

describe('<Navigation />', () => {
  it('renders without crashing', () => {
    shallow(<Navigation />);
  });
});
