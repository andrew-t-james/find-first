import React from 'react';
import { shallow } from 'enzyme';
import { JobsContainer } from '../JobsContainer';

jest.mock('../../../firebase/firebase.js');

describe('<JobsContainer />', () => {
  let wrapper;

  beforeEach(() => wrapper = shallow(<JobsContainer />));

  test('should match snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });
});
