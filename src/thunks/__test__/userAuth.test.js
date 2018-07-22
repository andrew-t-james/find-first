import { googleLogin, githubLogin, googleLogout } from '../auth';
import { googleSignInAction, googleSignOutAction, githubLoginAction } from '../../Actions/auth';
import { firebase, logout, googleOAuthLogin } from '../../firebase/firebase';
import { githubOAuthLogin } from '../../firebase/__mocks__/firebase';

jest.mock('../../firebase/firebase');

describe('auth thunks', () => {
  let mockDispatch;

  beforeEach(() => {
    mockDispatch = jest.fn();
  });

  test('should call googleSignInAction', async () => {
    const thunk = googleLogin(googleOAuthLogin, googleSignInAction);
    const mockUser = {
      uid: 1,
      displayName: 'Steve',
      photoURL: 'some-url'
    };
    const actionToDispatch = googleSignInAction(mockUser);
    await thunk(mockDispatch);
    expect(mockDispatch).toHaveBeenCalledWith(actionToDispatch);
  });

  test('should call gitHubSignAction', async () => {
    const thunk = googleLogin(githubOAuthLogin, githubLoginAction);
    const mockUser = {
      uid: 1,
      displayName: 'Steve',
      photoURL: 'some-url'
    };
    const actionToDispatch = githubLoginAction(mockUser);
    await thunk(mockDispatch);
    expect(mockDispatch).toHaveBeenCalledWith(actionToDispatch);
  });

  test('should call googleLogout', async () => {
    const thunk = googleLogout(logout, googleSignOutAction);
    const actionToDispatch = googleSignOutAction();
    await thunk(mockDispatch);
    expect(mockDispatch).toHaveBeenCalledWith(actionToDispatch);
  });
});
