import { isLoadingAction } from '../Actions/loader';
import database from '../firebase/firebase';
import { saveJobAction } from '../Actions/saved-jobs';

export const addJobToFirebase = newJob => {
  return async dispatch => {
    dispatch(isLoadingAction(true));
    const newSavedJob = await database.ref('saved-jobs').push(newJob);

    dispatch(saveJobAction({
      id: newSavedJob.key,
      ...newJob
    }));
    dispatch(isLoadingAction(false));
  };
};