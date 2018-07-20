import React from 'react';
import { shallow } from 'enzyme';
import { SignIn } from '../SignIn';

describe('<SignIn />', () => {
  let wrapper;

  beforeEach(() => wrapper = shallow(<SignIn />));

  test('should update email state on change', () => {
    const mockEvent = {
      target: {
        name: 'email',
        value: 'me@mail.com'
      }
    };
    wrapper.instance().handleChange(mockEvent);
    expect(wrapper.state('email')).toEqual('me@mail.com');
  });

  test('should update password state on change', () => {
    const mockEvent = {
      target: {
        name: 'password',
        value: 'weak'
      }
    };
    wrapper.instance().handleChange(mockEvent);
    expect(wrapper.state('password')).toEqual('weak');
  });

  test('should match snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });
});
