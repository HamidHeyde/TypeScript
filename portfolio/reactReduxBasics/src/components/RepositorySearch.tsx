import { useState } from 'react';
import { useTypedSelector } from '../hooks/useTypedSelector';
import { useActions } from '../hooks/useActions';

const RepositorySearch: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState<string | null>('');
  const { searchRepositories } = useActions();
  const {loading, error, data} = useTypedSelector(
    (state) => state.repositories
  );


  const handleOnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
  };

  const handleOnClick = (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    console.log(searchTerm);
    searchRepositories(searchTerm || '');
    setSearchTerm('');
  };

  const handleOnKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter') {
      console.log(searchTerm);
      searchRepositories(searchTerm || '');
      setSearchTerm('');
    }
  }

  return (
  <>
    <div>
      <h3>Search for repositories on github</h3>
      <br />
      <input
        id="searchTermInput"
        type="text"
        value={searchTerm || ''}
        onChange={handleOnChange}
        onKeyDown={handleOnKeyDown}
      />
      <button onClick={handleOnClick}>Click To Search</button>
    </div>
    <div>
    {error && <h3>{error}</h3>}
    {loading && <h3>Loading...</h3>}
    {!error && !loading && data.map((name) => <div key={name}>{name}</div>)}
    </div>
  </>
  );
};

export default RepositorySearch;
