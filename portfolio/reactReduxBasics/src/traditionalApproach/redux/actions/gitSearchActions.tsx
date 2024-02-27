import { gitSearchActionTypes as ActionTypes } from '../actionTypes';

// fetching Initiated
interface iFetchingInitiatedAction {
  type: ActionTypes.Fetching_Initiated;
}
export const fetchingInitiatedAction = (): iFetchingInitiatedAction => ({
  type: ActionTypes.Fetching_Initiated
});

// fetching Failed
interface iFetchingFailedAction {
  type: ActionTypes.Fetching_Failed;
  payload: string;
}
export const fetchingFailedAction = (
  payload: string
): iFetchingFailedAction => ({
  type: ActionTypes.Fetching_Failed,
  payload
});

// fetching Succeeded
interface iFetchingSucceededAction {
  type: ActionTypes.Fetching_Succeeded;
  payload: string[];
}
export const fetchingSucceededAction = (
  payload: string[]
): iFetchingSucceededAction => ({
  type: ActionTypes.Fetching_Succeeded,
  payload
});

// all actions type
type tAction =
  | iFetchingInitiatedAction
  | iFetchingFailedAction
  | iFetchingSucceededAction;

export default tAction;
