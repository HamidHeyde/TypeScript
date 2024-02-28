import axios from 'axios';
import { ActionTypes } from './actionTypes';
import { Actions } from './actions';
import { Dispatch } from 'redux';

export const searchGitRepositories = (query: string) => {
  return async (dispatch: Dispatch<Actions>) => {
    dispatch({ type: ActionTypes.Git_Search_Initiated });
    try {
      const results = await axios.get(
        `https://api.github.com/search/repositories?q=${query}`
      );
      const resArray =
        results?.data?.items?.map(
          (item: { name: string; [key: string]: any }) => item.name
        ) || [];
      dispatch({
        type: ActionTypes.Git_Search_Succeeded,
        payload: resArray
      });
    } catch (error) {
      dispatch({
        type: ActionTypes.Git_Search_Failed,
        payload: error instanceof Error ? error.message : 'Something went wrong'
      });
    }
  };
};
