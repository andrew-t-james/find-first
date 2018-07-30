import { isLoadingAction } from '../Actions/loader';
import database from '../firebase/firebase';
import { saveJobAction } from '../Actions/saved-jobs';

export const addJobToFirebase = newJob => {
  return async dispatch => {
    dispatch(isLoadingAction(true));

    await database.ref('saved-jobs').push(newJob);

    dispatch(isLoadingAction(false));
  };
};

export const getSavedJobsFromFirebase = () => {
  return async dispatch => {
    dispatch(isLoadingAction(true));

    await database.ref('saved-jobs').once('value').then(snapshot => {
      const savedJobs = [];
      snapshot.forEach(childSnapShot => {
        savedJobs.push(childSnapShot.val());
      });
      dispatch(saveJobAction(savedJobs));
    });

    dispatch(isLoadingAction(false));
  };
};