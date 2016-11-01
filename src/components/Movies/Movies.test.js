import React from 'react';
import { shallow } from 'enzyme';
import Movies from './';

describe('<Movies />', () => {
  it('renders without crashing', () => {
    shallow(<Movies />);
  });
});
