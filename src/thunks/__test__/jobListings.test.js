import { githubJobsThunk } from '../jobListings';
import { githubJobsAction } from '../../Actions/github';
import { isLoadingAction } from '../../Actions/loader';
import { githubApiRequest } from '../../helpers/api-helpers';

jest.mock('../../helpers/api-helpers.js');


describe('gitHubJobsThunk', () => {
  let mockDispatch;

  beforeEach(() => mockDispatch = jest.fn());

  test('should call dispatch with isLoadingAction with a parameter of true', async () => {
    const thunk = githubJobsThunk();
    const actionToDispatch = isLoadingAction(true);

    await thunk(mockDispatch);
    expect(mockDispatch).toHaveBeenCalledWith(actionToDispatch);
  });

  test('should call dispatch with isLoadingAction with a parameter of false', async () => {
    const thunk = githubJobsThunk();
    const actionToDispatch = isLoadingAction(false);

    await thunk(mockDispatch);
    expect(mockDispatch).toHaveBeenCalledWith(actionToDispatch);
  });

  test('should call dispatch with gitHubApiRequest', async () => {
    const thunk = githubJobsThunk();
    const actionToDispatch = githubJobsAction();

    await thunk(mockDispatch);
    expect(mockDispatch).toHaveBeenCalledWith(actionToDispatch);
  });
});
