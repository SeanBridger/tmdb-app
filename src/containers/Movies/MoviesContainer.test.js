import React from 'react';
import { shallow } from 'enzyme';
import MoviesContainer from './';

describe('<MoviesContainer />', () => {
  it('renders without crashing', () => {
    shallow(<MoviesContainer max="5" />);
  });
});
