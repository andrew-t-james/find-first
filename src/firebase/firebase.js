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

const database = firebase.database();
// * how to push into firebase
database.ref('notes').push({
  title: 'todo',
  body: 'go for a run'
});

// * editing arrya data in firebase
database.ref('notes/-LHu-AHZ3jixVR0wryuZ').update({
  title: 'dont todo',
  body: 'yeah not doing it'
});



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

database.ref('notes').on('child_removed', snapshot => {
  console.log(snapshot.key, snapshot.val());
});

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