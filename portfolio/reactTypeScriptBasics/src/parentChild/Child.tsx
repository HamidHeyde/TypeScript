type tChildData = {
  color: string;
};

type tChildComponent = React.FC<tChildData>;

const Child: tChildComponent = ({ color }) => (
  <div> {color}: from children </div>
);

export default Child;
