import axios from 'axios';
import { Dispatch } from 'redux';
import { RepositoriesActions as Actions } from '../actions';
import { RepositoriesActionTypes as ActionType} from '../actionTypes';

const searchRepositories = (searchTerm: string) => {
  return async (dispatch: Dispatch<Actions>) => {
    dispatch({
      type: ActionType.REPOSITORIES_SEARCH_INITIATION,
    });

    try {
      const { data } = await axios.get(
        "https://registry.npmjs.org/-/v1/search",
        {
          params: {
            text: searchTerm,
          },
        }
      );

      const names = data.objects.map((result: any) => {
        return result.package.name;
      });

      dispatch({
        type: ActionType.REPOSITORIES_SEARCH_SUCCESS,
        payload: names,
      });
    } catch (err) {
      if (err instanceof Error) {
        dispatch({
          type: ActionType.REPOSITORIES_SEARCH_ERROR,
          payload: err.message,
        });
      }
    }
  };
};

export { searchRepositories };
