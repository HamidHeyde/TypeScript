import React from 'react';
import { useState } from 'react';
// common
// import { useAppSelector, useAppDispatch } from '../1common/store';
// import { searchGitRepositories } from '../1common/reducers/actionCreators';

// new
import { useAppSelector, useAppDispatch } from '../2new/store';
import { gitSearchRepositories2 } from '../2new/reducers/actionCreators';

/**
 * GitSearch component fetches Git repository search results.
 * Allows searching by query term and displays results.
 * Manages query state and controls search request.
 * Renders input, button, and results display.
 */
const GitSearch: React.FC = () => {
  const [query, setQuery] = useState('');
  const dispatch = useAppDispatch();
  const { loading, error, payload } = useAppSelector(
    (state) => state.gitSearch
  );

  useAppSelector((state) => console.log(state));

  const handleOnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(event.target.value);
  };

  const handleOnKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter') {
      console.log('Search Term =>', query);
      // common
      // query.trim() && dispatch(searchGitRepositories(query));
      // new
      query.trim() && dispatch(gitSearchRepositories2(query));
      setQuery('');
    }
  };

  const handleButtonOnClick = () => {
    console.log('Search Term =>', query);
    console.log('Search Term =>', query);
    // common
    // query.trim() && dispatch(searchGitRepositories(query));
    // new
    query.trim() && dispatch(gitSearchRepositories2(query));
    setQuery('');
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
        {!error &&
          !loading &&
          payload.map((name, idx) => <div key={`${name}_${idx}`}>{name}</div>)}
      </div>
    </>
  );
};

export default GitSearch;
