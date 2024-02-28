import { ActionTypes } from './actionTypes';
import { Actions } from './actions';

interface iInitialState {
  loading: boolean;
  error: string | null;
  payload: string[];
}

const initialState: iInitialState = {
  loading: false,
  error: null,
  payload: []
};

export const reducer = (
  state: iInitialState = initialState,
  action: Actions
) => {
  switch (action.type) {
    case ActionTypes.Git_Search_Initiated:
      return {
        loading: true,
        error: null,
        payload: []
      };
    case ActionTypes.Git_Search_Succeeded:
      return {
        loading: false,
        error: null,
        payload: action.payload
      };
    case ActionTypes.Git_Search_Failed:
      return {
        loading: false,
        error: action.payload,
        payload: []
      };
    default:
      return initialState;
  }
};
