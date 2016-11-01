import React from 'react';
import { shallow, mount } from 'enzyme';
import MovieContainer from './';

describe('<MovieContainer />', () => {
  it('renders without crashing', () => {
    shallow(<MovieContainer />);
  });
});
