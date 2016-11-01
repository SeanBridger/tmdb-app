import React from 'react';
import { shallow } from 'enzyme';
import MovieInfo from './';

describe('<MovieInfo />', () => {
  it('renders without crashing', () => {
    shallow(<MovieInfo />);
  });
  it('renders correct info', () => {
    const wrapper = shallow(<MovieInfo title='Test Title' release_date='2016-06-16' overview='Some blurb about the movie' backdrop='' />);
    expect(wrapper.find('h1').text()).toBe('Test Title');
    expect(wrapper.find('h2').text()).toBe('2016-06-16');
    expect(wrapper.find('p').text()).toBe('Some blurb about the movie');
  });
});
