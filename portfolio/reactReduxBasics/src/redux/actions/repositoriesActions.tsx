import { RepositoriesActionTypes } from '../actionTypes';

type tRepositoriesSearchInitiation = {
  type: RepositoriesActionTypes.REPOSITORIES_SEARCH_INITIATION;
};

type tRepositoriesSearchError = {
  type: RepositoriesActionTypes.REPOSITORIES_SEARCH_ERROR;
  payload: string;
};

type tRepositoriesSearchSuccess = {
  type: RepositoriesActionTypes.REPOSITORIES_SEARCH_SUCCESS;
  payload: string[];
};

type tAction =
  | tRepositoriesSearchInitiation
  | tRepositoriesSearchError
  | tRepositoriesSearchSuccess;

export default tAction;
