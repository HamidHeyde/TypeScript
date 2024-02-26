import { Dispatch } from 'redux';
import { default as ActionTypes } from '../actionTypes/gitSearchActionTypes';
import axios from 'axios';

/**
 * Searches npm registry for repositories matching the given query string.
 *
 * @param query - The search query string.
 * @returns A redux thunk function that dispatches the search actions.
 */
const searchRepositories = (
  query: string
): ((dispatch: Dispatch) => Promise<void>) => {
  return async (dispatch: Dispatch) => {
    dispatch({ type: ActionTypes.Git_SEARCH_INITIATION });

    try {
      const { data } = await axios.get(
        'https://registry.npmjs.org/-/v1/search',
        {
          params: {
            text: query
          }
        }
      );

      const names = data.objects.map((result: any) => {
        return result.package.name;
      });

      dispatch({
        type: ActionTypes.Git_SEARCH_SUCCESS,
        payload: names
      });
    } catch (error) {
      if (error instanceof Error) {
        dispatch({
          type: ActionTypes.Git_SEARCH_ERROR,
          payload: error.message
        });
      }
    }
  };
};

export default searchRepositories;
