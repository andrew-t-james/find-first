import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { authReducer } from '../Reducers/auth';
import { menuReducer } from '../Reducers/menu';
import { jobListingReducer } from '../Reducers/jobs';
import thunk from 'redux-thunk';

export default () => {
  const store = createStore(
    combineReducers({
      user: authReducer,
      slideMenuActive: menuReducer,
      githubJobs: jobListingReducer
    }),
    composeWithDevTools(applyMiddleware(thunk))
  );
  return store;
};