import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { authReducer } from '../Reducers/auth';
import { menuReducer } from '../Reducers/menu';
import { loaderReducer } from '../Reducers/loader';
import { jobListingReducer } from '../Reducers/jobs';
import { savedJobsReducer } from '../Reducers/saved-jobs';
import thunk from 'redux-thunk';

export default () => {
  const store = createStore(
    combineReducers({
      user: authReducer,
      slideMenuActive: menuReducer,
      githubJobs: jobListingReducer,
      isLoading: loaderReducer,
      savedJobs: savedJobsReducer
    }),
    composeWithDevTools(applyMiddleware(thunk))
  );
  return store;
};