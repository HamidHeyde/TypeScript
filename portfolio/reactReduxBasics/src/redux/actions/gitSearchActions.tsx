import { gitSearchActionTypes as ActionTypes } from "../actionTypes";

/**
 * Action interface for initiating a Git search.
 *
 * @param type - Action type constant for initiating Git search.
 */
interface iGitSearchInitiationAction {
  type: ActionTypes.Git_SEARCH_INITIATION;
}

/**
 * Action interface for handling Git search errors.
 *
 * @param type - Action type constant for Git search error.
 * @param payload - Error message string.
 */
interface iGitSearchErrorAction {
  type: ActionTypes.Git_SEARCH_ERROR;
  payload: string;
}

/**
 * Action interface for handling successful Git search.
 *
 * @param type - Action type constant for successful Git search.
 * @param payload - Array of search result strings (repository names).
 */
interface iGitSearchSuccessAction {
  type: ActionTypes.Git_SEARCH_SUCCESS;
  payload: string[];
}

type Actions =
  | iGitSearchInitiationAction
  | iGitSearchErrorAction
  | iGitSearchSuccessAction;

export default Actions