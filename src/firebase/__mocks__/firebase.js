const mockUser = {
  user: {
    uid: 1,
    displayName: 'Steve',
    photoURL: 'some-url'
  }
};

const mockSavedJob = {
  title: 'title',
  url: 'url',
  image: 'url',
  val: () => jest.fn()
};

const mockSavedJobs = [mockSavedJob];

export const initializeApp = jest.fn()
  .mockImplementation(() => {});

export const firebase = {
  auth: () => ({
    GoogleAuthProvider: new Promise(resolve => resolve()),
    signInWithPopup: () => new Promise(resolve => resolve(mockUser)),
    signOut: () => new Promise(resolve => resolve())
  })
};

export const logout = jest.fn();
export const googleOAuthLogin = () => new Promise(resolve => resolve(mockUser));
export const githubOAuthLogin = () => new Promise(resolve => resolve(mockUser));

const database = {
  ref: () => ({
    push: () => new Promise(resolve => resolve(mockSavedJob)),
    once: () => new Promise(resolve => resolve(mockSavedJobs))
  })
};

export {database as default};