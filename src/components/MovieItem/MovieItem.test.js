import React from 'react';
import { shallow } from 'enzyme';
import MovieItem from './';

describe('<MovieItem />', () => {
  it('renders without crashing', () => {
    shallow(<MovieItem />);
  });
});
