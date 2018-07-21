export const authReducer = (state = {}, action) => {
  switch (action.type) {
    case 'GOOGLE_LOGIN':
      return {
        id: action.uid
      };
    case 'GOOGLE_LOGOUT':
      return {};
    default:
      return state;
  }
};