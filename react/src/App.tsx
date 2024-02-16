import TextField from '@mui/material/TextField';
import User, { tUser } from './components/user';

const usersList: tUser[] = [
  { id: 1, name: 'Leanne Graham', username: 'Bret' },
  { id: 2, name: 'Ervin Howell', username: 'Antonette' },
  { id: 3, name: 'Clementine Bauch', username: 'Samantha' },
  { id: 4, name: 'Patricia Lebsack', username: 'Karianne' },
  { id: 5, name: 'Chelsey Dirich', username: 'Kamren' }
];

const App = (): JSX.Element => {
  const classes = styles()

  return (
    <div style={classes.root as React.CSSProperties}>
      <TextField style={classes.textInput as React.CSSProperties}/>
      <User users={usersList} />
    </div>
  );
};

export default App;


const styles = () => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center'
  },
  textInput: {
    marginTop: '20px',
    width: '300px'
  }
});