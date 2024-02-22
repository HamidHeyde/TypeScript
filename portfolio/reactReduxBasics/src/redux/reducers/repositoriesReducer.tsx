import { RepositoriesActions } from '../actions';
import { RepositoriesActionTypes } from '../actionTypes';

type tRepositoriesState = {
  loading: boolean;
  error: string | null;
  data: string[];
};

const initialRepositoriesState = {
  loading: false,
  error: null,
  data: []
};

const RepositoriesReducer = (
  state: tRepositoriesState = initialRepositoriesState,
  action: RepositoriesActions
): tRepositoriesState => {
  switch (action.type) {
    case RepositoriesActionTypes.REPOSITORIES_SEARCH_INITIATION:
      return {
        ...state,
        loading: true,
        error: null,
        data: []
      };
    case RepositoriesActionTypes.REPOSITORIES_SEARCH_SUCCESS:
      return {
        ...state,
        loading: false,
        error: null,
        data: action.payload
      };
    case RepositoriesActionTypes.REPOSITORIES_SEARCH_ERROR:
      return {
        ...state,
        loading: false,
        error: action.payload,
        data: []
      };
    default:
      return state;
  }
};

export default RepositoriesReducer;
