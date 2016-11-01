import React from 'react';
import { shallow } from 'enzyme';
import Search from './';

describe('<Search />', () => {
  it('renders without crashing', () => {
    shallow(<Search handleKeyUp={function() {}} handleChange={function() {}} />);
  });
  it('simulates keypress events', () => {
    let testKeyUp = jest.fn();
    let testChange = jest.fn();
    const wrapper = shallow(<Search handleKeyUp={testKeyUp} handleChange={testChange} />);
    wrapper.find('input').simulate('keyup');
    wrapper.find('input').simulate('change');
    expect(testKeyUp.mock.calls.length).toBe(1);
    expect(testChange.mock.calls.length).toBe(1);
  });
});
