import React from 'react';
import { shallow } from 'enzyme';
import Card from '../Card';

describe('<Card />', () => {
  let wrapper;

  beforeEach(() => wrapper = shallow(<Card />));
  test('should match snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });

});
