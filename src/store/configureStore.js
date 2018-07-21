import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';

export default () => {
  const store = createStore(
    combineReducers({
      something: ''
    }),
    composeWithDevTools(applyMiddleware(thunk))
  );
  return store;
};