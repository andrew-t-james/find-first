const githubJobCleaner = jobs => {
  const regex = /(&nbsp;|<([^>]+)>)/ig;

  return jobs.map(job => ({
    title: job.title,
    location: job.location,
    description: job.description,
    url: job.url
  }));
};

export const gitHubJobs = async () => {
  const url = 'https://jobs.github.com/positions.json?search=code&page=1';
  try {
    const response = await fetch(url);
  } catch (error) {
    throw Error('Oops something went wrong');
  }
  const results = response.json();

  return results;
};