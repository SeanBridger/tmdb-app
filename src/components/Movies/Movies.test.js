import React from 'react';
import { shallow } from 'enzyme';
import Movies from './';
import MovieItem from '../MovieItem';

describe('<Movies />', () => {
  it('renders without crashing', () => {
    shallow(<Movies />);
  });
  it('renders correct info', () => {
    const items = [
      {
        id: 1,
        poster_path: ''
      },
      {
        id: 2,
        poster_path: ''
      },
      {
        id: 3,
        poster_path: ''
      }
    ];

    const wrapper = shallow(<Movies title="Test Title" movies={items} />);
    expect(wrapper.find('h1').text()).toBe('Test Title');
    expect(wrapper.find(MovieItem).length).toBe(3);

    const newItems = [
      {
        id: 4,
        poster_path: ''
      },
      {
        id: 5,
        poster_path: ''
      }
    ];

    wrapper.setProps({
      movies: newItems
    });

    expect(wrapper.find(MovieItem).length).toBe(2);

  });
});
