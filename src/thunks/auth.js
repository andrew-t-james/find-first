
export const googleLogin = (authProvider, loginAction) => {
  return async dispatch => {
    const newUser = await authProvider();
    dispatch(loginAction(newUser.user));
  };
};

export const googleLogout = (authLogout, logoutAction) => {
  return async dispatch => {
    await authLogout();
    dispatch(logoutAction());
  };
};