import React from 'react';
import { shallow } from 'enzyme';
import { SignIn, mapDispatchToProps } from '../SignIn';
import { googleSignInAction, googleSignOutAction, githubLoginAction } from '../../../Actions/auth';

jest.mock('../../../firebase/firebase.js');

describe('<SignIn />', () => {
  let wrapper;
  const mockGoogleLogin = jest.fn();
  const mockGithubLogin = jest.fn();
  const mockGoogleSignOut = jest.fn();

  beforeEach(() => wrapper = shallow(
    <SignIn
      googleLogin={mockGoogleLogin}
      githubLogin={mockGithubLogin}
      googleLogout={mockGoogleSignOut}
    />
  ));

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

  test('should call handleGoogleLogin onClick', () => {
    wrapper.find('.google').simulate('click');

    expect(mockGoogleLogin).toHaveBeenCalled();
  });

  test('should call handleGithubLogin onClick', () => {
    wrapper.find('.github').simulate('click');

    expect(mockGithubLogin).toHaveBeenCalled();
  });

  test('should call handleGoogleSignOut onClick', () => {
    wrapper.find('.sign-out').simulate('click');

    expect(mockGoogleSignOut).toHaveBeenCalled();
  });

  test('should match snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });

  describe('mapDispatchToPops', () => {
    test('should call dispatch googleLogin is called', () => {
      const mockDispatch = jest.fn();
      const id = 1;
      const name = 'Steve';
      const mockUser = {
        uid: id,
        displayName: name
      };
      const actionToDispatch = googleSignInAction(mockUser);
      const mappedProps = mapDispatchToProps(mockDispatch);
      mappedProps.googleLogin();

      expect(mockDispatch).toHaveBeenCalled();
    });

    test('should call dispatch githubSingIn is called', () => {
      const mockDispatch = jest.fn();
      const id = 1;
      const name = 'Steve';
      const mockUser = {
        uid: id,
        displayName: name
      };
      const actionToDispatch = googleSignInAction(mockUser);
      const mappedProps = mapDispatchToProps(mockDispatch);
      mappedProps.githubLogin();

      expect(mockDispatch).toHaveBeenCalled();
    });

    test('should call dispatch googleLogout is called', () => {
      const mockDispatch = jest.fn();
      const actionToDispatch = googleSignOutAction();
      const mappedProps = mapDispatchToProps(mockDispatch);
      mappedProps.googleLogout();

      expect(mockDispatch).toHaveBeenCalled();
    });
  });
});
