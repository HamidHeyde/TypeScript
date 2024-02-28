import axios from 'axios';
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export const gitSearch = createAsyncThunk(
  'gitSearchReducers/gitSearch',
  async (searchTerm: string) => {
    const { data } = await axios.get(
      'https://api.github.com/search/repositories',
      {
        params: {
          q: searchTerm
        }
      }
    );

    return data;
  }
);

type tInitialState = {
  loading: boolean;
  error: string | null;
  payload: string[];
};

const initialState: tInitialState = {
  loading: false,
  error: null,
  payload: []
};

export const GitSearchSlice = createSlice({
  name: 'gitSearchSlice',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(gitSearch.pending, (state) => {
      state.loading = true;
      state.error = null;
      state.payload = [];
    });
    builder.addCase(gitSearch.rejected, (state, action: any) => {
      console.log(action.error);
      state.loading = false;
      state.error = action?.error?.message as string;
      state.payload = [];
    });
    builder.addCase(gitSearch.fulfilled, (state, action: any) => {
      const { items } = action.payload;
      const names = items?.map((item: any) => {
        return item.name;
      });
      state.loading = false;
      state.error = null;
      state.payload = names;
    });
  }
});

export default GitSearchSlice.reducer;
