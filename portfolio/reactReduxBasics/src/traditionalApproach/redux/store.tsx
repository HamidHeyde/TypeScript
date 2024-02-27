import { createStore, combineReducers, applyMiddleware } from 'redux';
import { thunk } from 'redux-thunk';
import { composeWithDevTools } from '@redux-devtools/extension';
import { gitSearchReducers } from './reducers';

const rootReducers = combineReducers({
  gitSearch: gitSearchReducers
});

const store = createStore(
  rootReducers,
  {},
  composeWithDevTools(applyMiddleware(thunk))
);

export default store;

export type RootState = ReturnType<typeof rootReducers>;
