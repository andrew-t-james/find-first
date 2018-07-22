import * as auth from '../auth';

describe('auth actions', () => {

  describe('google account auth', () => {
    test('should have type GOOGLE_LOGIN', () => {
      const { googleSignInAction } = auth;
      const id = 1;
      const name = 'Steve';
      const image = 'some-url';
      const mockUser = {
        uid: id,
        displayName: name,
        photoURL: image
      };
      const expected = {
        type: 'GOOGLE_LOGIN',
        user: {
          ...mockUser
        }
      };
      const result = googleSignInAction(mockUser);
      expect(result).toEqual(expected);
    });

    test('should have a type GITHUB_LOGIN', () => {
      const { githubLoginAction } = auth;
      const id = 1;
      const name = 'Steve';
      const image = 'some-url';
      const mockUser = {
        uid: id,
        displayName: name,
        photoURL: image
      };
      const expected = {
        type: 'GITHUB_LOGIN',
        user: {
          ...mockUser
        }
      };

      const result = githubLoginAction(mockUser);
      expect(result).toEqual(expected);
    });

    test('should have a type TWITTER_LOGIN', () => {
      const { twitterLoginAction } = auth;
      const id = 1;
      const name = 'Steve';
      const image = 'some-url';
      const mockUser = {
        uid: id,
        displayName: name,
        photoURL: image
      };
      const expected = {
        type: 'TWITTER_LOGIN',
        user: {
          ...mockUser
        }
      };

      const result = twitterLoginAction(mockUser);
      expect(result).toEqual(expected);
    });

    test('should have type GOOGLE_LOGOUT', () => {
      const { googleSignOutAction } = auth;
      const expected = {
        type: 'GOOGLE_LOGOUT'
      };
      const result = googleSignOutAction();
      expect(result).toEqual(expected);
    });
  });
});
