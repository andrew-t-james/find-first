import React from 'react';
import { shallow } from 'enzyme';
import Loader from '../Loader';

describe('<Loader />', () => {
  let wrapper;

  beforeEach(() => wrapper = shallow(<Loader />));

  test('should match snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });

});
