import React from 'react';
import ReactDOM from 'react-dom';
import './styles/styles.scss';
import Router, { history } from './router/Router';
import { Provider } from 'react-redux';
import { firebase } from './firebase/firebase';
import configureStore from './store/configureStore';
import { googleSignInAction } from './Actions/auth';

const store = configureStore();

const app = (
  <Provider store={store}>
    <Router />
  </Provider>
);

ReactDOM.render(app, document.getElementById('app'));

firebase.auth().onAuthStateChanged(async user => {
  if (user) {
    await store.dispatch(googleSignInAction(user));
    history.push('/dashboard');
  } else {
    history.push('/');
    console.log('log out');
  }
});
