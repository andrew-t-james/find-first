export const savedJobsReducer = (state = [], action) => {
  switch (action.type) {
    case 'SAVE_JOB':
      return [...action.jobs];
    default:
      return state;
  }
};