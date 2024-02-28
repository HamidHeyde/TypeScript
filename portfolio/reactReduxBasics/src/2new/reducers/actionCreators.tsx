import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const gitSearchRepositories2 = createAsyncThunk(
  'gitSearchReducers/gitSearchRepositories2',
  async (searchTerm: string) => {
    const { data } = await axios.get(
      `https://api.github.com/search/repositories?q=${searchTerm}`
    );

    return data;
  }
);
