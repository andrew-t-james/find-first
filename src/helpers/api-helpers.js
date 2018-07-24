const githubJobCleaner = jobs => {
  const regex = /(&nbsp;|<([^>]+)>)/ig;

  return jobs.map(job => ({
    title: job.title,
    location: job.location,
    description: job.description,
    type: job.type,
    url: job.url
  }));
};

export const githubApiRequest = async () => {
  const url = 'https://cors-anywhere.herokuapp.com/https://jobs.github.com/positions.json?search=code&page=1';

  const response = await fetch(url);

  if (!response.ok) {
    throw Error('Oops something went wrong');
  }

  const results = await response.json();
  const githubJobListings = await githubJobCleaner(results);
  console.log(githubJobListings);
  return githubJobListings;
};