export const authReducer = (state = {}, action) => {
  switch (action.type) {
    case 'GOOGLE_LOGIN':
      return {
        ...state,
        id: action.user.uid,
        image: action.user.photoURL,
        name: action.user.displayName
      };
    case 'GITHUB_LOGIN':
      return {
        ...state,
        id: action.user.uid,
        image: action.user.photoURL,
        name: action.user.displayName
      };
    case 'TWITTER_LOGIN':
      return {
        ...state,
        id: action.user.uid,
        image: action.user.photoURL,
        name: action.user.displayName
      };
    case 'FACEBOOK_LOGIN':
      return {
        ...state,
        id: action.user.uid,
        image: action.user.photoURL,
        name: action.user.displayName
      };
    case 'GOOGLE_LOGOUT':
      return {};
    default:
      return state;
  }
};