import { githubApiRequest, githubJobCleaner  } from '../api-helpers';
import { mockRandom } from 'jest-mock-random';

describe('githubApiRequest', () => {
  mockRandom(0.1);
  const mockGithubResponse = [{
    title: 'Job Title',
    location: 'Somewhere USA',
    description: 'Description',
    type: 'Full Time',
    url: 'https://some-url-here',
    company_logo: 'https://some-url-here',
    company: 'Some Name',
    id: 10001
  }];

  const mockCleanedJobs = [{
    title: 'Job Title',
    location: 'Somewhere USA',
    description: 'Description',
    type: 'Full Time',
    url: 'https://some-url-here',
    image: 'https://some-url-here',
    company: 'Some Name',
    id: 10001
  }];

  test('should call fetch', async () => {
    window.fetch = jest.fn().mockImplementation(() => Promise.resolve({
      ok: true,
      json: () => Promise.resolve(mockGithubResponse)
    }));

    await githubApiRequest();
    expect(window.fetch).toHaveBeenCalled();
  });

  test('should handle errors if response !ok', async () => {
    window.fetch = jest.fn().mockImplementation(() => Promise.resolve({
      ok: false,
      json: () => Promise.resolve()
    }));


    await expect(githubApiRequest()).rejects.toEqual(Error('Oops something went wrong'));
  });

  test('shoaled return cleaned github jobs data', async () => {
    window.fetch = jest.fn().mockImplementation(() => Promise.resolve({
      ok: true,
      json: () => Promise.resolve(mockGithubResponse)
    }));

    const result = await githubApiRequest();
    expect(result).toEqual(mockCleanedJobs);
  });

  test('should throw a new Error if response not ok', async () => {
    window.fetch = jest.fn().mockImplementation(() => Promise.resolve({
      ok: false
    }));
    await expect(githubApiRequest()).rejects.toEqual(Error('Oops something went wrong'));
  });


  describe('githubJobCleaner', () => {
    test('should return cleaned data', () => {
      const result = githubJobCleaner(mockGithubResponse);
      expect(result).toEqual(mockCleanedJobs);
    });
  });
});