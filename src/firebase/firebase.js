import * as firebase from 'firebase';

const config = {
  apiKey: process.env.FIREBASE_API_KEY,
  authDomain: process.env.FIREBASE_AUTH_DOMAIN,
  databaseURL: process.env.FIREBASE_DATABASE_URL,
  projectId: process.env.FIREBASE_PROJECT_ID,
  storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID
};

firebase.initializeApp(config);

export const database = firebase.database();
export const googleAuthProvider = new firebase.auth.GoogleAuthProvider();
export const githubAuthProvider = new firebase.auth.GithubAuthProvider();
export const twitterAuthProvider = new firebase.auth.TwitterAuthProvider();
export const facebookAuthProvider = new firebase.auth.FacebookAuthProvider();

export const googleOAuthLogin = () => firebase.auth().signInWithPopup(googleAuthProvider);
export const githubOAuthLogin = () => firebase.auth().signInWithPopup(githubAuthProvider);
export const twitterOAuthLogin = () => firebase.auth().signInWithPopup(twitterAuthProvider);
export const facebookOAuthLogin = () => firebase.auth().signInWithPopup(facebookAuthProvider);
export const logout = () => firebase.auth().signOut();

export { firebase };


// * how to push into firebase
// database.ref('notes').push({
//   title: 'todo',
//   body: 'go for a run'
// });

// * editing array data in firebase
// database.ref('notes/-LI6UR9CVl1FaV46zinX').update({
//   title: 'dont todo',
//   body: 'yeah not doing it'
// });



// database.ref('notes')
//   .once('value')
//   .then(snapshot => {
//     const notes = [];
//     snapshot.forEach(snap => {
//       notes.push({
//         id: snap.key,
//         ...snap.val()
//       });
//     });
//     console.log(notes);
//   });


// database.ref('notes').on('value', snapshot => {
//   const expenses = [];

//   snapshot.forEach((childSnapshot) => {
//     expenses.push({
//       id: childSnapshot.key,
//       ...childSnapshot.val()
//     });
//   });

//   console.log(expenses);
// });

// database.ref('notes').on('child_removed', snapshot => {
//   console.log(snapshot.key, snapshot.val());
// });


// database.ref('notes')
//   .once('value')
//   .then((snapshot) => {
//     const expenses = [];

//     snapshot.forEach((childSnapshot) => {
//       expenses.push({
//         id: childSnapshot.key,
//         ...childSnapshot.val()
//       });
//     });

//     console.log(expenses);
//   });