import { ChangeEvent, KeyboardEvent, useState } from 'react';

export const UserList: React.FC = () => {
  const [val, setVal] = useState<string>('');
  const [list, setList] = useState<string[]>([]);

  const handleOnChange = (e: ChangeEvent<HTMLInputElement>) => {
    setVal(e.target.value);
  };

  const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>): void => {
    if (e.keyCode === 13) {
      setList([...list, val]);
      setVal('');
    }
  };

  const handleOnClick = () => {
    setList([...list, val]);
    setVal('');
  };

  return (
    <div>
      <input
        id="valName"
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
      <div>{list?.map((item) => item.trim()).join(' - ')}</div>
    </div>
  );
};

export default UserList;
