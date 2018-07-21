const mockUser = {
  user: {
    uid: 1,
    displayName: 'Steve',
    photoURL: 'some-url'
  }
};

export const initializeApp = jest.fn()
  .mockImplementation(() => {});

// export const firebase = {
//   auth: () => ({
//     GoogleAuthProvider: jest.fn(() => {}),
//     signInWithPopup: () => new Promise(resolve => resolve(mockUser)),
//     signOut: () => jest.fn()
//   })
// };

export const logout = jest.fn();
export const googleOAuthLogin = () => new Promise(resolve => resolve(mockUser));
export const githubOAuthLogin = () => new Promise(resolve => resolve(mockUser));