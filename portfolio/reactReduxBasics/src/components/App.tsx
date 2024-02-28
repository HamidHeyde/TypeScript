import GitSearch from './gitSearch';
import { Provider } from 'react-redux';
// common
// import { store } from '../1common/store';

// new
import { store } from '../2new/store';

/**
 * Renders the main App component which wraps the GitSearch component in a Redux
 * Provider with the store. This allows GitSearch and all child components to
 * access the Redux store.
 */
const App: React.FC = () => {
  return (
    <Provider store={store}>
      <div>
        <GitSearch />
      </div>
    </Provider>
  );
};

export default App;
