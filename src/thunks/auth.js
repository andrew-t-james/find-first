import { firebase, googleAuthProvider } from '../firebase/firebase';
import { googleSignInAction, googleSignOutAction } from '../Actions/auth';

export const googleLogin = () => {
  return async dispatch => {
    const googleUser = await firebase.auth().signInWithPopup(googleAuthProvider);
    dispatch(googleSignInAction(googleUser.user));
  };
};

export const googleLogout = () => {
  return async dispatch => {
    await firebase.auth().signOut();
    dispatch(googleSignOutAction());
  };
};