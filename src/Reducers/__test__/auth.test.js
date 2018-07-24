import { authReducer } from '../auth';
import * as actions from '../../Actions/auth';

describe('', () => {
  const id = 1;
  const name = 'Steve';
  const image = 'some-url';
  const mockUser = {
    uid: id,
    displayName: name,
    photoURL: image
  };

  test('should return a newUser when case is GOOGLE_LOGIN ', () => {
    const { googleSignInAction } = actions;
    const expected = {
      id,
      name,
      image
    };

    const result = authReducer(null, googleSignInAction(mockUser));

    expect(result).toEqual(expected);
  });

  test('should return a newUser when case is GITHUB_LOGIN ', () => {
    const { githubLoginAction } = actions;
    const expected = {
      id,
      name,
      image
    };

    const result = authReducer(null, githubLoginAction(mockUser));

    expect(result).toEqual(expected);
  });

  test('should return a newUser when case is TWITTER_LOGIN ', () => {
    const { twitterLoginAction } = actions;
    const expected = {
      id,
      name,
      image
    };

    const result = authReducer(null, twitterLoginAction(mockUser));

    expect(result).toEqual(expected);
  });

  test('should return a newUser when case is FACEBOOK_LOGIN ', () => {
    const { facebookLoginAction } = actions;
    const expected = {
      id,
      name,
      image
    };

    const result = authReducer(null, facebookLoginAction(mockUser));

    expect(result).toEqual(expected);
  });

  test('should return a newUser when case is GOOGLE_LOGOUT ', () => {
    const { googleSignOutAction } = actions;
    const expected = {};

    const result = authReducer(null, googleSignOutAction(mockUser));

    expect(result).toEqual(expected);
  });

  test('should return default state', () => {
    const expected = {};
    const result = authReducer(undefined, jest.fn());

    expect(result).toEqual(expected);
  });

});
