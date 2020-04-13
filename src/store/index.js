import { createStore, applyMiddleware } from 'redux';
import mainReducer from './reducers/mainReducer';
import createSagaMiddleware from 'redux-saga';
import {
  watchSearchRequest,
  watchLogonRequest,
  watchRegisterRequest,
  watchProfileFetch,
} from '../sagas/saga';

const sagaMiddleware = createSagaMiddleware();

export const store = createStore(mainReducer, applyMiddleware(sagaMiddleware));
sagaMiddleware.run(watchSearchRequest);
sagaMiddleware.run(watchLogonRequest);
sagaMiddleware.run(watchRegisterRequest);
sagaMiddleware.run(watchProfileFetch);
