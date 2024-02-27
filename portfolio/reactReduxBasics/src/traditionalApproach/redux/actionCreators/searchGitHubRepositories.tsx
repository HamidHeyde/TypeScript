import { gitSearchActionTypes as ActionTypes } from '../actionTypes';
// import { fetchingInitiatedAction } from '../actions';

import axios from 'axios';

const searchGitHubRepositories = (searchTerm: string) => {
  return async (dispatch: any) => {
    /**
     * you can both dispatch the content either directly or by calling on the ACTION function
     * dispatch({ type: ActionTypes.Fetching_Initiated });
     * OR
     * dispatch(fetchingInitiatedAction());
     */

    dispatch({ type: ActionTypes.Fetching_Initiated });

    try {
      const { data } = await axios.get(
        'https://api.github.com/search/repositories',
        {
          params: {
            q: searchTerm
          }
        }
      );

      const names = data.items.map((item: any) => {
        return item.name;
      });

      dispatch({
        type: ActionTypes.Fetching_Succeeded,
        payload: names
      });
    } catch (error) {
      if (error instanceof Error) {
        dispatch({
          type: ActionTypes.Fetching_Failed,
          payload: error.message
        });
      }
    }
  };
};

export default searchGitHubRepositories;
