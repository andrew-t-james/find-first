import React from 'react';
import { shallow } from 'enzyme';
import Router from '../Router';

jest.mock('../../firebase/firebase.js');

describe('<Router />', () => {
  let wrapper;

  beforeEach(() => wrapper = shallow(<Router />));

  test('should match snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });
});
