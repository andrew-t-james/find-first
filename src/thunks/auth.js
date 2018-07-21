import { googleOAuthLogin, githubOAuthLogin, logout } from '../firebase/firebase';
import { googleSignInAction, googleSignOutAction, githubLoginAction } from '../Actions/auth';

export const googleLogin = () => {
  return async dispatch => {
    const googleUser = await googleOAuthLogin();
    dispatch(googleSignInAction(googleUser.user));
  };
};

export const googleLogout = () => {
  return async dispatch => {
    await logout();
    dispatch(googleSignOutAction());
  };
};

export const githubLogin = () => {
  return async dispatch => {
    const githubUser = await githubOAuthLogin();
    dispatch(githubLoginAction(githubUser.user));
  };
};