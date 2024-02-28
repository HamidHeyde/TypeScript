import { ActionTypes } from './actionTypes';

interface iGitSearchInitiatedAction {
  type: ActionTypes.Git_Search_Initiated;
}

interface iGitSearchSucceededAction {
  type: ActionTypes.Git_Search_Succeeded;
  payload: string[];
}

interface iGitSearchFailedAction {
  type: ActionTypes.Git_Search_Failed;
  payload: string;
}

export type Actions =
  | iGitSearchInitiatedAction
  | iGitSearchSucceededAction
  | iGitSearchFailedAction;
