import Parent from "./Parent";
import Child from "./Child";

type tPropsSection = React.FC

const PropsSection:tPropsSection = () => (
  <div>
    <Parent>
      <Child color="RED" />
    </Parent>
  </div>
);

export default PropsSection