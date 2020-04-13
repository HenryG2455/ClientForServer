const defaultState = {
  loggedIn: false,
  query: '',
  result: [],
  page: 1,
  loaded: false,
  password: '',
  email: '',
  username: '',
  currentUser: {},
  token: '',
  redirectMess: '',
};

const mainReducer = (state = defaultState, action) => {
  switch (action.type) {
    case 'PAGE_UP':
      return {
        ...state,
        page: state.page + 1,
      };
    case 'PAGE_DOWN':
      return {
        ...state,
        page: state.page - 1,
      };
    case 'RESULT_DATA':
      return {
        ...state,
        result: action.payload.result,
      };
    case 'QUERY_CHANGE':
      return {
        ...state,
        query: action.payload,
      };
    case 'SET_EMAIL':
      return {
        ...state,
        email: action.payload,
      };
    case 'SET_USERNAME':
      return {
        ...state,
        username: action.payload,
      };
    case 'SET_PASSWORD':
      return {
        ...state,
        password: action.payload,
      };
    case 'LOGON_DATA':
      return {
        ...state,
        currentUser: action.payload,
        loggedIn: true,
      };
    case 'PROFILE_DATA':
      return {
        ...state,
        currentUser: action.payload,
      };
    case 'NO_TOKEN':
      return {
        ...state,
        loggedIn: false,
        currentUser: {},
      };
    case 'REDIRECT_MESS':
      return {
        ...state,
        redirectMess: action.payload,
      };
    default:
      return state;
  }
};

export default mainReducer;
