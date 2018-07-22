export const googleSignInAction = user => ({
  type: 'GOOGLE_LOGIN',
  user
});

export const googleSignOutAction = () => ({
  type: 'GOOGLE_LOGOUT'
});

export const githubLoginAction = user => ({
  type: 'GITHUB_LOGIN',
  user
});

export const twitterLoginAction = user => ({
  type: 'TWITTER_LOGIN',
  user
});

export const facebookLoginAction = user => ({
  type: 'FACEBOOK_LOGIN',
  user
});