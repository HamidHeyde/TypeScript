import { configureStore } from '@reduxjs/toolkit';
import { default as gitSearchReducer } from './reducers/gitSearchReducers';
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';

const rootReducer = {
  gitSearch: gitSearchReducer
};

const store = configureStore({ reducer: rootReducer });

export default store;

export type RootState = ReturnType<typeof store.getState>;
export const useAppDispatch: () => typeof store.dispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
