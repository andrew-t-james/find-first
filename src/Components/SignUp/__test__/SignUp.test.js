import React from 'react';
import { shallow } from 'enzyme';
import { SignUp } from '../SignUp';

describe('<SignUp />', () => {
  let wrapper;

  beforeEach(() => wrapper = shallow(<SignUp />));

  test('should update firstName onChange ', () => {
    const mockEvent = {
      target: {
        name: 'firstName',
        value: 'me'
      }
    };

    wrapper.instance().handleChange(mockEvent);
    expect(wrapper.state('firstName')).toEqual('me');
  });

  test('should update email onChange ', () => {
    const mockEvent = {
      target: {
        name: 'email',
        value: 'me'
      }
    };

    wrapper.instance().handleChange(mockEvent);
    expect(wrapper.state('email')).toEqual('me');
  });

  test('should update password onChange ', () => {
    const mockEvent = {
      target: {
        name: 'password',
        value: 'me'
      }
    };

    wrapper.instance().handleChange(mockEvent);
    expect(wrapper.state('password')).toEqual('me');
  });
  test('should match snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });
});
