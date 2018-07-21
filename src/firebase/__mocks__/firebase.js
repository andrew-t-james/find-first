const mockUser = {
  user: {
    uid: 1,
    displayName: 'Steve'
  }
};

export const initializeApp = jest.fn()
  .mockImplementation(() => {});

export const firebase = {
  auth: () => ({
    GoogleAuthProvider: jest.fn(() => {}),
    signInWithPopup: () => new Promise(resolve => resolve(mockUser)),
    signOut: () => jest.fn()
  })
};