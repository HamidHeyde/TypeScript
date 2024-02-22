import React from 'react';
import { useState } from 'react';
import useActionCreators from '../hooks/useActionCreators';
import useReduxStore from '../hooks/useReduxStore';

/**
 * GitSearch component fetches Git repository search results.
 * Allows searching by query term and displays results.
 * Manages query state and controls search request.
 * Renders input, button, and results display.
 */
const GitSearch: React.FC = () => {
  const [query, setQuery] = useState('');
  const { gitSearchActionCreators } = useActionCreators();
  const { data, error, loading } = useReduxStore((state) => state.gitSearch);

  const handleOnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(event.target.value);
  };

  const handleOnKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter') {
      console.log('Search Term =>', query);
      gitSearchActionCreators(query);
      setQuery('');
    }
  };

  const handleButtonOnClick = () => {
    console.log('Search Term =>', query);
    gitSearchActionCreators(query);
    setQuery('');
  };

  return (
    <>
      <div>
        <input
          type="text"
          id="input_repositorySearch"
          value={query}
          onChange={handleOnChange}
          onKeyDown={handleOnKeyDown}
        />
        <button onClick={handleButtonOnClick}>Search</button>
      </div>
      <div>
        {error && <h3>{error}</h3>}
        {loading && <h3>Loading...</h3>}
        {!error && !loading && data.map((name) => <div key={name}>{name}</div>)}
      </div>
    </>
  );
};

export default GitSearch;
