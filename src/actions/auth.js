export const googleSignInAction = user => ({
  type: 'GOOGLE_LOGIN',
  user
});

export const googleSignOutAction = () => ({
  type: 'GOOGLE_LOGOUT'
});