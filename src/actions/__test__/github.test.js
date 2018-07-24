import { githubJobsAction } from '../github';
describe('githubApiRequest', () => {
  test('should ', () => {
    const mockJobs = [{title: 'title'}];

    const expected = {
      type: 'GITHUB_JOBS',
      jobs: [...mockJobs]
    };
    const result = githubJobsAction(mockJobs);
    expect(result).toEqual(expected);
  });
});