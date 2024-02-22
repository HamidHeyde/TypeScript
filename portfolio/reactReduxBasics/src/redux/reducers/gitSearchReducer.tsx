import { gitSearchActions as Actions } from '../actions';
import { gitSearchActionTypes as ActionTypes } from '../actionTypes';

/**
 * Interface for the initial state of the gitSearch reducer.
 *
 * @property loading - Whether a search is currently in progress.
 * @property error - Any error from the latest search, or null if none.
 * @property data - Results of the latest search.
 */
interface iInitialState {
  loading: boolean;
  error: string | null;
  data: string[];
}

const initialState: iInitialState = {
  loading: false,
  error: null,
  data: []
};
/**
 * Reducer for handling gitSearch actions and updating gitSearch state.
 *
 * @param state - The current state.
 * @param action - The action being dispatched.
 * @returns The updated state after reducing on the action.
 */

const reducer = (state: iInitialState = initialState, action: Actions) => {
  switch (action.type) {
    case ActionTypes.Git_SEARCH_INITIATION:
      return {
        loading: true,
        error: null,
        data: []
      };
    case ActionTypes.Git_SEARCH_SUCCESS:
      return {
        loading: false,
        error: null,
        data: action.payload
      };
    case ActionTypes.Git_SEARCH_ERROR:
      return {
        loading: false,
        error: action.payload,
        data: []
      };
    default:
      return state;
  }
};

export default reducer;
