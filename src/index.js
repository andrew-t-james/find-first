import React from 'react';
import ReactDOM from 'react-dom';
import './styles/styles.scss';
import Router, { history } from './router/Router';
import { Provider } from 'react-redux';
import { firebase } from './firebase/firebase';
import configureStore from './store/configureStore';
import { googleSignInAction, twitterLoginAction, githubLoginAction, facebookLoginAction, googleSignOutAction } from './Actions/auth';

const store = configureStore();

const app = (
  <Provider store={store}>
    <Router />
  </Provider>
);

firebase.auth().onAuthStateChanged(async user => {
  if (!user) {
    history.push('/');
    console.log('log out');
    renderApp();
  }
  const provider = user.providerData[0].providerId;

  if (provider.includes('github')) {
    await store.dispatch(githubLoginAction(user));
    history.push('/dashboard');
    renderApp();
  } else if (provider.includes('google')) {
    await store.dispatch(googleSignInAction(user));
    history.push('/dashboard');
    renderApp();
  } else if (provider.includes('twitter')) {
    await store.dispatch(twitterLoginAction(user));
    history.push('/dashboard');
    renderApp();
  } else if (provider.includes('facebook')) {
    await store.dispatch(facebookLoginAction(user));
    history.push('/dashboard');
    renderApp();
  }

});

const renderApp = () => {
  let hasRendered = false;
  if (!hasRendered) {
    ReactDOM.render(app, document.getElementById('app'));
    hasRendered = true;
  } else {
    ReactDOM.render(app, document.getElementById('app'));
  }
};



