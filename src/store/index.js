import { combineReducers, applyMiddleware, createStore, compose } from 'redux'

import { createLogger } from 'redux-logger'
import thunk from 'redux-thunk';

import AuthReducer from './reducers/AuthReducer';

import AuthMiddleware from './middleware/AuthMiddleware';

export {
  AuthMiddleware
}

const middleware = compose(
  applyMiddleware(thunk, createLogger())
);

export const rootReducer = combineReducers({
  AuthReducer
});

export const store = createStore(
  rootReducer,
  middleware
)