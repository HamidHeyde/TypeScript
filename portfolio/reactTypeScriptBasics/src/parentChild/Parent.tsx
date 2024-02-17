type tParentProps = {
  children?: React.ReactNode;
};

type tParentComponent = React.FC<tParentProps>;

const Parent: tParentComponent = ({ children }) => (
  <>
    <h3>In the Parent</h3>
    {children}
  </>
);

export default Parent;
