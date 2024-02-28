import React from 'react';
import { useState } from 'react';
// import { useAppDispatch, useAppSelector } from '../newApproach/store';
// import { gitSearch } from '../newApproach/reducers/gitSearchReducers';
// import useActionCreators from '../traditionalApproach/hooks/useActionCreators';
// import useReduxStore from '../traditionalApproach/hooks/useReduxStore';
import {
  useAppDispatch,
  useAppSelector
} from '../traditionalApproach/redux/store';
import { searchGitHubRepositories } from '../traditionalApproach/redux/actionCreators';
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
      // query.trim() && dispatch(gitSearch(query));
      query.trim() && dispatch(searchGitHubRepositories(query));
      setQuery('');
    }
  };

  const handleButtonOnClick = () => {
    console.log('Search Term =>', query);
    // New Approach
    // query.trim() && dispatch(gitSearch(query));
    // Traditional Approach
    query.trim() && dispatch(searchGitHubRepositories(query));
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
