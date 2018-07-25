import { githubJobsAction } from '../Actions/github';
import { githubApiRequest } from '../helpers/api-helpers';

export const githubJobsThunk = () => {
  return async dispatch => {
    const githubJobsList = await githubApiRequest();
    dispatch(githubJobsAction(githubJobsList));
  };
};