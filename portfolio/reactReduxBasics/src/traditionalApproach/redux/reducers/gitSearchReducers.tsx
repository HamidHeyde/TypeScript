import { gitSearchActionTypes as ActionTypes } from '../actionTypes';
import { gitSearchActions as Actions } from '../actions';

type tInitialState = {
  loading: boolean;
  error: string | null;
  payload: string[];
};

const initialState: tInitialState = {
  loading: false,
  error: null,
  payload: []
};

const reducer = (state = initialState, action: Actions) => {
  switch (action.type) {
    case ActionTypes.Fetching_Initiated:
      return {
        loading: true,
        error: null,
        payload: []
      };
    case ActionTypes.Fetching_Failed:
      return {
        loading: false,
        error: action.payload,
        payload: []
      };
    case ActionTypes.Fetching_Succeeded:
      return {
        loading: false,
        error: null,
        payload: action.payload
      };
    default:
      return state;
  }
};

export default reducer;
