import { configureStore } from '@reduxjs/toolkit';
import { default as gitSearchReducer } from './reducers/reducers';
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';

const rootReducer = {
  gitSearch: gitSearchReducer
};

export const store = configureStore({ reducer: rootReducer });

// Extras
// RootState and the useSelector
type RootState = ReturnType<typeof store.getState>;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
// useDispatch
export const useAppDispatch: () => typeof store.dispatch = useDispatch;
