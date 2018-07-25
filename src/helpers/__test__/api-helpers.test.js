import { githubApiRequest, githubJobCleaner  } from '../api-helpers';

describe('githubApiRequest', () => {
  const mockGithubResponse = [{
    title: 'Job Title',
    location: 'Somewhere USA',
    description: 'Description',
    type: 'Full Time',
    url: 'https://some-url-here',
    company_logo: 'https://some-url-here',
    company: 'Some Name'
  }];

  const mockCleanedJobs = [{
    title: 'Job Title',
    location: 'Somewhere USA',
    description: 'Description',
    type: 'Full Time',
    url: 'https://some-url-here',
    image: 'https://some-url-here',
    company: 'Some Name'
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

  describe('githubJobCleaner', () => {
    test('should return cleaned data', () => {
      const result = githubJobCleaner(mockGithubResponse);
      expect(result).toEqual(mockCleanedJobs);
    });

  });

});