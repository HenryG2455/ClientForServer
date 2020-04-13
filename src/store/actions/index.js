export const changePageUp = () => {
  return {
    type: 'PAGE_UP',
  };
};

export const changePageDown = () => {
  return {
    type: 'PAGE_DOWN',
  };
};

export const getSearchResult = (data) => {
  return {
    type: 'GET_SEARCH_DATA',
    payload: data,
  };
};

export const changeQuery = (data) => {
  return {
    type: 'QUERY_CHANGE',
    payload: data,
  };
};

export const setEmail = (data) => {
  return {
    type: 'SET_EMAIL',
    payload: data,
  };
};

export const setUser = (data) => {
  return {
    type: 'SET_USERNAME',
    payload: data,
  };
};

export const setPassword = (data) => {
  return {
    type: 'SET_PASSWORD',
    payload: data,
  };
};

export const signIn = () => {
  return {
    type: 'SIGN_IN_ATTEMPT',
  };
};

export const getRegistered = () => {
  return {
    type: 'SIGNUP_ATTEMPT',
  };
};

export const getProfileFetch = () => {
  return {
    type: 'GET_USER_PROFILE',
  };
};

export const redirectMessage = (data) => {
  return {
    type: 'REDIRECT_MESS',
    payload: data,
  };
};
