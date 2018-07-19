import React from 'react';
import { shallow } from 'enzyme';
import Dashboard from '../Dashboard';

describe('<Dashboard />', () => {
  let wrapper;

  beforeEach(() => wrapper = shallow(<Dashboard />));

  test('should match snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });
});
