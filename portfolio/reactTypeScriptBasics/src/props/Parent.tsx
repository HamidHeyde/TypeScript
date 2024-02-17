type tParentProps = {
  children?: React.ReactNode;
};

type tParentComponent = React.FC<tParentProps>;

const Parent: tParentComponent = ({ children }) => (
  <div>
    <h3>In the Parent</h3>
    {children}
  </div>
);

export default Parent;
