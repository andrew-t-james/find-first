import { firebase, googleAuthProvider } from '../firebase/firebase';

export const googleLogin = () => {
  return () => {
    return firebase.auth().signInWithPopup(googleAuthProvider);
  };
};