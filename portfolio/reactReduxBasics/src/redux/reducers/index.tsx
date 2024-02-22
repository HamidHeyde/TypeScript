import { combineReducers } from 'redux';
import RepositoriesReducer from './repositoriesReducer';

const rootReducer = combineReducers({ 
  repositories: RepositoriesReducer 
});

export default rootReducer;

export type RootState = ReturnType<typeof rootReducer>;