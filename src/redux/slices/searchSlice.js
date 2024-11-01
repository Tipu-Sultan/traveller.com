// src/redux/slices/searchSlice.js
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import searchServices from '../services/searchServices';

const initialState = {
  results: [],
  loading: false,
  error: null,
};

export const search = createAsyncThunk('/places/search', searchServices.search);

const searchSlice = createSlice({
  name: 'search',
  initialState,
  reducers: {
    clearSearch(state) {
      state.results = [];
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(search.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(search.fulfilled, (state, action) => {
        state.loading = false;
        state.results = action.payload; 
      })
      .addCase(search.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
        state.results = [];
      });
  },
});

export const { clearSearch } = searchSlice.actions;

export default searchSlice.reducer;
