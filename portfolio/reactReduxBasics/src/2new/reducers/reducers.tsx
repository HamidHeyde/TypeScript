import { createSlice } from '@reduxjs/toolkit';
import { gitSearchRepositories2 } from './actionCreators';

interface iInitialState {
  loading: boolean;
  error: string | null;
  payload: string[];
}

const initialState: iInitialState = {
  loading: false,
  error: null,
  payload: []
};

export const reducer = createSlice({
  name: 'gitSearch',
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder.addCase(gitSearchRepositories2.pending, (state) => {
      state.loading = true;
      state.error = null;
      state.payload = [];
    });
    builder.addCase(gitSearchRepositories2.rejected, (state, action: any) => {
      state.loading = false;
      state.error = action.error.message;
      state.payload = [];
    });
    builder.addCase(gitSearchRepositories2.fulfilled, (state, action: any) => {
      state.loading = false;
      state.error = null;
      state.payload =
        action.payload?.items?.map(
          (item: { name: string; [key: string]: any }) => item.name
        ) || [];
    });
  }
});

export default reducer.reducer;
