import { useDispatch } from "react-redux";
import * as ActionCreators from "../redux/actionCreators";
import { bindActionCreators } from "redux";

/**
 * Hook that binds action creators to dispatch.
 *
 * @returns Object containing bound action creators.
 */
const useActionCreators = () => {
  const dispatch = useDispatch();

  return bindActionCreators(ActionCreators, dispatch);
};

export default useActionCreators;