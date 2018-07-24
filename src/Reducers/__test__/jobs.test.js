import { jobListingReducer } from '../jobs';
import { githubJobsAction } from '../../Actions/github';

describe('jobListingReducer', () => {
  let mockJobs;
  beforeEach(() => mockJobs = [{title: 'title'}]);

  test('should return new state for case GITHUB_JOBS', () => {
    const result = jobListingReducer([], githubJobsAction(mockJobs));
    expect(result).toEqual(mockJobs);
  });

  test('should return default state', () => {
    const result = jobListingReducer([], jest.fn());
    expect(result).toEqual([]);
  });

});
