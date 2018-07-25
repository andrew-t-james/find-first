import { githubJobsAction } from '../Actions/github';
import { githubApiRequest } from '../helpers/api-helpers';
import { isLoadingAction } from '../Actions/loader';

export const githubJobsThunk = () => {
  return async dispatch => {
    dispatch(isLoadingAction(true));
    const githubJobsList = await githubApiRequest();
    dispatch(isLoadingAction(false));
    dispatch(githubJobsAction(githubJobsList));
  };
};