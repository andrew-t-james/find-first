export const jobListingReducer = (state = [], action) => {
  switch (action.type) {
    case 'GITHUB_JOBS':
      return [...state, ...action.jobs];
    default:
      return state;
  }
};