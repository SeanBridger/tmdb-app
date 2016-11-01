import React from 'react';
import { shallow } from 'enzyme';
import App from './';
import SearchContainer from '../../containers/Search';

describe('<App />', () => {
  it('should render children when passed in', () => {
    const wrapper = shallow(<App>
        <SearchContainer />
      </App>);
    expect(wrapper.find(SearchContainer).length).toBe(1);
  });
});
