import React from 'react';
import { shallow } from 'enzyme';
import App from './';

describe('<MoviesContainer />', () => {
  it('renders without crashing', () => {
    shallow(<App />);
  });
});
