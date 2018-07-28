export const githubJobCleaner = jobs => {
  return jobs.map(job => ({
    title: job.title,
    location: job.location,
    description: job.description,
    type: job.type,
    url: job.url,
    image: job.company_logo,
    company: job.company,
    id: job.id
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