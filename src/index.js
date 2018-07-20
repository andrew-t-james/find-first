import React from 'react';
import ReactDOM from 'react-dom';
import './styles/styles.scss';
import Router from './router/Router';
import './firebase/firebase';

ReactDOM.render(<Router />, document.getElementById('app'));
