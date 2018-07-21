import { googleLogin, googleLogout } from '../auth';
import { googleSignInAction, googleSignOutAction } from '../../Actions/auth';
import { firebase } from '../../firebase/firebase';

jest.mock('../../firebase/firebase');

describe('auth thunks', () => {
  let mockDispatch;

  beforeEach(() => {
    mockDispatch = jest.fn();
  });

  test('should call firebase.auth.signInWitPopUp', async () => {
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

  test('should call firebase.auth.signOut', async () => {
    const thunk = googleLogout();
    const actionToDispatch = googleSignOutAction();
    await thunk(mockDispatch);
    expect(mockDispatch).toHaveBeenCalledWith(actionToDispatch);
  });
});
