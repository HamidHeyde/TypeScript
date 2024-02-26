import { createStore } from 'redux';
import rootReducer from './reducers';
import { applyMiddleware } from 'redux';
import { thunk } from 'redux-thunk';
import { composeWithDevTools } from '@redux-devtools/extension';

/**
 * Creates Redux store with root reducer, initial state,
 * and Redux DevTools and thunk middleware.
 *
 * @param {Function} rootReducer - Root reducer combining all reducers
 * @param {Object} preloadedState - Initial state
 * @param {Function} enhancer - Store enhancer, e.g. applyMiddleware
 */
const store = createStore(
  rootReducer,
  {},
  composeWithDevTools(applyMiddleware(thunk))
);

export default store;
