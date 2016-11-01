import React from 'react';
import { shallow } from 'enzyme';
import MoviesContainer from './';

describe('<MoviesContainer />', () => {
  it('renders without crashing', () => {
    shallow(<MoviesContainer title="Test Title" url="something" max="5" />);
  });
});
