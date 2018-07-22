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
      googleLogout={mockGoogleSignOut}
    />
  ));

  test('should call handleGoogleLogin onClick google button', () => {
    wrapper.find('.google').simulate('click');

    expect(mockGoogleLogin).toHaveBeenCalled();
  });

  test('should call handleLogin onClick github button', () => {
    wrapper.find('.github').simulate('click');

    expect(mockGoogleLogin).toHaveBeenCalled();
  });

  test('should call handleLogin onClick twitter button', () => {
    wrapper.find('.twitter').simulate('click');

    expect(mockGoogleLogin).toHaveBeenCalled();
  });
  test('should call handleLogin onClick facebook button', () => {
    wrapper.find('.facebook').simulate('click');

    expect(mockGoogleLogin).toHaveBeenCalled();
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

    // test('should call dispatch githubSingIn is called', () => {
    //   const mockDispatch = jest.fn();
    //   const id = 1;
    //   const name = 'Steve';
    //   const mockUser = {
    //     uid: id,
    //     displayName: name
    //   };
    //   const actionToDispatch = googleSignInAction(mockUser);
    //   const mappedProps = mapDispatchToProps(mockDispatch);
    //   mappedProps.githubLogin();

    //   expect(mockDispatch).toHaveBeenCalled();
    // });

    test('should call dispatch googleLogout is called', () => {
      const mockDispatch = jest.fn();
      const actionToDispatch = googleSignOutAction();
      const mappedProps = mapDispatchToProps(mockDispatch);
      mappedProps.googleLogout();

      expect(mockDispatch).toHaveBeenCalled();
    });
  });
});
