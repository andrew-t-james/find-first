export const savedJobsReducer = (state = [], action) => {
  switch (action.type) {
    case 'SAVE_JOB':
      return [...state, action.job];
    default:
      return state;
  }
};