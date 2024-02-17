import Parent from './parentChild/Parent';
import Child from './parentChild/Child';

const App = () => (
  <div>
    <Parent>
      <Child color="RED" />
    </Parent>
  </div>
);

export default App;
