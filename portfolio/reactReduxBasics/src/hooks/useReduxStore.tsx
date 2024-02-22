import { RootState } from '../redux/reducers';
import { useSelector, TypedUseSelectorHook } from 'react-redux';

/**
 * Custom hook to access the Redux store's state.
 *
 * @returns Store state typed as RootState.
 */
const useReduxStore: TypedUseSelectorHook<RootState> = useSelector;

export default useReduxStore;