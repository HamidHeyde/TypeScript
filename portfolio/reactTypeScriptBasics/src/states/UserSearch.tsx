import { ChangeEvent, KeyboardEvent, useState } from 'react';

type tUser = {
  name: string
  age: number
}

const userList: tUser[] = [
  {name: "Hamid", age: 12},
  {name: "Sophie", age: 18},
  {name: "Shyleen", age: 2},
  {name: "mama", age: 25},
]

const UserSearch = () => {
  const [val, setVal] = useState<string>('');
  const [theUser, setTheUser] = useState<tUser | undefined>();

  const handleOnChange = (e: ChangeEvent<HTMLInputElement>) => {
    setVal(e.target.value);
  };

  const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>): void => {
    if (e.keyCode === 13) {
      const user: tUser[] = userList.filter(item => item.name === val)
      setTheUser((user.length ? user[0] : undefined));
      setVal('');
    }
  };

  const handleOnClick = () => {
    const user: tUser[] = userList.filter(item => item.name === val)
    setTheUser((user.length ? user[0] : undefined));
    setVal('');
  };

  return (
    <div>
      <hr />
      <br />
      <input
        id="userName"
        value={val}
        onChange={handleOnChange}
        onKeyDown={handleKeyDown}
      />
      <br />
      <br />
      <button onClick={handleOnClick}>
        {' '}
        Click me and add item to the list
      </button>
      <br />
      <br />
      <h3>The List</h3>
      <div>{JSON.stringify(theUser ? theUser : {})}</div>
    </div>
  );
};

export default UserSearch;
