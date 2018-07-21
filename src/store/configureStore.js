import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { authReducer } from '../Reducers/auth';
import thunk from 'redux-thunk';

export default () => {
  const store = createStore(
    combineReducers({
      user: authReducer
    }),
    composeWithDevTools(applyMiddleware(thunk))
  );
  return store;
};