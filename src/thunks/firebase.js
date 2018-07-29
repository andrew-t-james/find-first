import { isLoadingAction } from '../Actions/loader';
import database from '../firebase/firebase';

export const addJobToFirebase = newJob => {
  return async dispatch => {
    dispatch(isLoadingAction(true));
    await database.ref('saved-jobs').push(newJob);
    dispatch(isLoadingAction(false));
  };
};