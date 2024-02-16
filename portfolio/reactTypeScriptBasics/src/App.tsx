import Parent from './parentChild/Parent';
import Child from './parentChild/Child';

const App = () => (
  <div>
    <Parent />
    <Child color="RED (being passed in)" />
  </div>
);

export default App;
