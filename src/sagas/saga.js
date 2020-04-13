import { takeEvery, put, call, select } from 'redux-saga/effects';
import { fetchLogon, fetchSearch, fetchSignUp, fetchProfile } from '../api';

function* searchInfoAsync() {
  try {
    const getQuery = (state) => state.query;
    const getPage = (state) => state.page;
    let query = yield select(getQuery);
    let page = yield select(getPage);
    console.log(query + ' ' + page);
    const result = yield call(fetchSearch, query, page);
    yield put({ type: 'RESULT_DATA', payload: result });
  } catch (e) {
    console.log(e);
  }
}

export function* watchSearchRequest() {
  yield takeEvery('GET_SEARCH_DATA', searchInfoAsync);
}

function* sendLoginAsync() {
  try {
    const getEmail = (state) => state.email;
    const getPassword = (state) => state.password;
    let email = yield select(getEmail);
    let password = yield select(getPassword);
    console.log(email + ' Login Data ' + password);
    const result = yield call(fetchLogon, email, password);
    yield put({ type: 'LOGIN_DATA', payload: result.user });
  } catch (e) {
    console.log(e);
  }
}

export function* watchLogonRequest() {
  yield takeEvery('SIGN_IN_ATTEMPT', sendLoginAsync);
}

function* sendSignUpAsync() {
  try {
    const getEmail = (state) => state.email;
    const getPassword = (state) => state.password;
    const getUsername = (state) => state.username;
    let email = yield select(getEmail);
    let password = yield select(getPassword);
    let username = yield select(getUsername);
    console.log('Attempting to Sign Up');
    const result = yield call(fetchSignUp, email, password, username);
    yield put({ type: 'CHANGE_PAGE', payload: result });
  } catch (e) {
    console.log(e);
  }
}

export function* watchRegisterRequest() {
  yield takeEvery('SIGNUP_ATTEMPT', sendSignUpAsync);
}

function* profileFetchAsync() {
  try {
    const token = localStorage.getItem('loginToken');
    console.log('Checking Profile');
    if (!token) {
      yield put({ type: 'NO_TOKEN' });
    } else {
      console.log(token);
      const result = yield call(fetchProfile, token);
      yield put({ type: 'PROFILE_DATA', payload: result });
    }
  } catch (e) {
    console.log(e);
  }
}

export function* watchProfileFetch() {
  yield takeEvery('GET_USER_PROFILE', profileFetchAsync);
}
