import { isLoadingAction } from '../Actions/loader';
import database from '../firebase/firebase';
import { saveJobAction } from '../Actions/saved-jobs';

export const addJobToFirebase = newJob => {
  return async dispatch => {
    dispatch(isLoadingAction(true));

    await database.ref('saved-jobs').push(newJob);
    dispatch(saveJobAction({
      ...newJob
    }));

    dispatch(isLoadingAction(false));
  };
};