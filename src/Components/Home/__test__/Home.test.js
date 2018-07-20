import React from 'react';
import { shallow } from 'enzyme';
import Home from '../Home';

describe('<Home />', () => {
  let wrapper;

  beforeEach(() => wrapper = shallow(<Home />));

  test('should match snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });
});
