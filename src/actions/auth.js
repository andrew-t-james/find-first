export const googleSignInAction = user => ({
  type: 'GOOGLE_LOGIN',
  id: user.uid,
  name: user.displayName,
  image: user.photoURL
});

export const googleSignOutAction = () => ({
  type: 'GOOGLE_LOGOUT'
});