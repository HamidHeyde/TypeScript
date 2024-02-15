import TextField from '@mui/material/TextField';
import { styled } from '@mui/material/styles';
import User, { tUser } from './components/user';

const usersList: tUser[] = [
  { id: 1, name: 'Leanne Graham', username: 'Bret' },
  { id: 2, name: 'Ervin Howell', username: 'Antonette' },
  { id: 3, name: 'Clementine Bauch', username: 'Samantha' },
  { id: 4, name: 'Patricia Lebsack', username: 'Karianne' },
  { id: 5, name: 'Chelsey Dirich', username: 'Kamren' }
];

const App = (): JSX.Element => {
  return (
    <Root>
      <TextInput />
      <User users={usersList} />
    </Root>
  );
};

export default App;

const Root = styled('div')(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center'
}));

const TextInput = styled(TextField)(({ theme }) => ({
  marginTop: '20px',
  width: '300px'
}));
