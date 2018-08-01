import React from 'react';

const logo =
  <div className="logo" id="menu-logo">
    <h1 className="logo__forward">F</h1>
    <h1 className="logo__backward">F</h1>
  </div>;

export const nav = [
  {label: logo, path: '/' },
  {id: 'sign-in', label: 'Sign-In', path: '/sign-in'},
  {id: 'dashboard', label: 'Dashboard', path: '/dashboard'},
  {id: 'saved-jobs', label: 'Saved Jobs', path: '/saved-jobs'}
];