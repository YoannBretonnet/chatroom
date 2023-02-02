/* eslint-disable no-underscore-dangle */
import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';

import logMiddleware from './middlewares/logMiddleware';
import authMiddleware from './middlewares/authMiddleware';

import reducer from './reducer';

const store = createStore(
  reducer,
  composeWithDevTools (
  applyMiddleware(
    logMiddleware,
    authMiddleware)
  )
);

export default store;
