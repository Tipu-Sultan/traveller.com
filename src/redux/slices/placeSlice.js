// src/redux/slices/searchSlice.js
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import placeServices from '../services/placeService';

const initialState = {
  place:{},
  nearbyHotels: [],
  bikesorCar: [],
  petrolStations: [],
  loading: false,
  error: null,
};

export const fetchPlaceServices = createAsyncThunk('/place/services', placeServices.fetchPlaceServices);
export const fetchPlace = createAsyncThunk('/place', placeServices.fetchPlace);


const tripSlice = createSlice({
  name: 'place',
  initialState,
  reducers: {
    clearServices(state) {
      state.hotels = [];
      state.bikesorCar = [];
      state.petrolStations = [];

    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchPlaceServices.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchPlaceServices.fulfilled, (state, action) => {
        state.loading = false;
        state.nearbyHotels = action.payload.nearbyHotels;
        state.bikesorCar = action.payload.nearbyBikeRentals;
      })
      .addCase(fetchPlaceServices.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
        state.results = [];
      })
      .addCase(fetchPlace.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchPlace.fulfilled, (state, action) => {
        state.loading = false;
        state.place = action.payload; 
        state.error = null;
      })
      .addCase(fetchPlace.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
        state.results = [];
      })
      ;
  },
});

export const { clearServices } = tripSlice.actions;

export default tripSlice.reducer;
