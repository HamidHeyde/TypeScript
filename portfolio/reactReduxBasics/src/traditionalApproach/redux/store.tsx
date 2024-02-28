import { createStore, combineReducers, applyMiddleware } from 'redux';
import { thunk } from 'redux-thunk';
import { composeWithDevTools } from '@redux-devtools/extension';
import { gitSearchReducers } from './reducers';
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';

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
export const useAppDispatch: () => typeof store.dispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
