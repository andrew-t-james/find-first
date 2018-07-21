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

    test('should have type GOOGLE_LOGOUT', () => {
      const { googleSignOutAction } = auth;
      const expected = {
        type: 'GOOGLE_LOGOUT'
      };
      const result = googleSignOutAction();
      expect(result).toEqual(expected);
    });
  });

  describe('manual user sign up auth', () => {
    test('should have a type MANUAL_SIGN_UP', () => {
      const { githubLoginAction } = auth;
      const expected = {
        type: 'GITHUB_LOGIN'
      };

      const result = githubLoginAction();
      expect(result).toEqual(expected);
    });
  });
});
