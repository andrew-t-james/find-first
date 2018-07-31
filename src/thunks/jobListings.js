import { githubJobsAction } from '../Actions/github';
import { githubApiRequest } from '../helpers/api-helpers';
import { isLoadingAction } from '../Actions/loader';

export const githubJobsThunk = () => {
  return async dispatch => {
    dispatch(isLoadingAction(true));
    try {
      const githubJobsList = await githubApiRequest();
      dispatch(isLoadingAction(false));
      dispatch(githubJobsAction(githubJobsList));
    } catch (error) {
      throw Error(error.message);
    }
  };
};