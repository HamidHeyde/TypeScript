/**
 * Enumeration of action types related to searching Git repositories.
 *
 * Git_SEARCH_INITIATION: Dispatched when initiating a Git repository search.
 * Git_SEARCH_SUCCESS: Dispatched when a Git repository search completes successfully.
 * Git_SEARCH_ERROR: Dispatched when a Git repository search encounters an error.
 */
enum ActionTypes {
  Git_SEARCH_INITIATION = 'Git_SEARCH_INITIATION',
  Git_SEARCH_SUCCESS = 'Git_SEARCH_SUCCESS',
  Git_SEARCH_ERROR = 'Git_SEARCH_ERROR'
}

export default ActionTypes;
