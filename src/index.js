import React from 'react';
import ReactDOM from 'react-dom';
import './styles/styles.scss';
import Router from './router/Router';
import { Provider } from 'react-redux';
import { firebase } from './firebase/firebase';
import configureStore from './store/configureStore';
import { googleLogin, googleLogout } from './Actions/auth';

const store = configureStore();

const app = (
  <Provider store={store}>
    <Router />
  </Provider>
);

ReactDOM.render(app, document.getElementById('app'));

firebase.auth().onAuthStateChanged(user => {
  if (user) {
    console.log('log in');
  } else {
    console.log('log out');
  }
});
