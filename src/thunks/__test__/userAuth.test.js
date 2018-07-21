import { googleLogin, githubLogin, googleLogout } from '../auth';
import { googleSignInAction, googleSignOutAction, githubLoginAction } from '../../Actions/auth';
import { firebase, logout } from '../../firebase/firebase';

jest.mock('../../firebase/firebase');

describe('auth thunks', () => {
  let mockDispatch;

  beforeEach(() => {
    mockDispatch = jest.fn();
  });

  test('should call googleSignInAction', async () => {
    const thunk = googleLogin();
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
    const thunk = githubLogin();
    const mockUser = {
      uid: 1,
      displayName: 'Steve',
      photoURL: 'some-url'
    };
    const actionToDispatch = githubLoginAction(mockUser);
    await thunk(mockDispatch);
    expect(mockDispatch).toHaveBeenCalledWith(actionToDispatch);
  });
  test('should call firebase.auth.signOut', async () => {
    const thunk = googleLogout();
    const actionToDispatch = googleSignOutAction();
    await thunk(mockDispatch);
    expect(mockDispatch).toHaveBeenCalledWith(actionToDispatch);
  });
});
