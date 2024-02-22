import Repository from './RepositorySearch';
import { Provider } from 'react-redux';
import store from '../redux/store';

const App = () => {
  return  (
    <Provider store={store}>
      <Repository />
    </Provider>
  )
};

export default App;
