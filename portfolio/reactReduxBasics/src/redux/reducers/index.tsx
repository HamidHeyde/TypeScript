import { combineReducers } from "redux";
import { default as gitSearchReducer } from "./gitSearchReducer";

/**
 * Combines all reducers into a single root reducer.
 * Maps each reducer key to the reducer function.
 */
const rootReducer = combineReducers({
  gitSearch: gitSearchReducer
});

export default rootReducer;

/**
 * Returns the root state returned by the root reducer.
 */
export type RootState = ReturnType<typeof rootReducer>;