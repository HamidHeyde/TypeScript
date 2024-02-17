type tChildData = {
  color: string;
};

type tChildComponent = React.FC<tChildData>;

const Child: tChildComponent = ({ color }) => (
  <div>
    <h4> In the child </h4>
    The color being passed in is =:= {color}
  </div>
);

export default Child;
