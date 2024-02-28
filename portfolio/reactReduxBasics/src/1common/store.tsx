/* eslint-disable import/first */
// The Reducer Section
import { createStore, combineReducers } from 'redux';
import { reducer as gitSearchReducer } from './reducers/reducers';

const rootReducer = combineReducers({
  gitSearch: gitSearchReducer
});

// The Middleware Section
import { composeWithDevTools } from '@redux-devtools/extension';
import { thunk } from 'redux-thunk';
import { applyMiddleware } from 'redux';

const middleware = composeWithDevTools(applyMiddleware(thunk));

// The Store
export const store = createStore(rootReducer, {}, middleware);

// Extras required for a typescript project with Redux
import { useSelector, useDispatch, TypedUseSelectorHook } from 'react-redux';
// Root State and the useSelector
type RootState = ReturnType<typeof rootReducer>;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
// Use Dispatch
export const useAppDispatch: () => typeof store.dispatch = useDispatch;
