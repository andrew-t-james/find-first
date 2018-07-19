import React from 'react';
import { shallow } from 'enzyme';
import Router from '../Router';

describe('<Router />', () => {
  let wrapper;

  beforeEach(() => wrapper = shallow(<Router />));

  test('should match snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });
});
