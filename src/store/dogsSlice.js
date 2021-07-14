import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import fetchDogs from '../fetchDog';

// Async Thunks
export const getDogs = createAsyncThunk(
  'dogs/getDogs',
  async(numDogs) => {
    try {
      const dogs = await fetchDogs(numDogs);
      return dogs;
    } catch (e) {
      return Promise.reject(e);
    }
  }
);

// INITIAL STATE
const initialState = {
  all: [],
  error: ''
};

const dogsSlice = createSlice({
  name: 'dogs',
  initialState,
  extraReducers: {
    [getDogs.fulfilled]: (state, action) => {
      state.all = action.payload;
    },
    [getDogs.rejected]: (state, action) => {
      state.error = action.error;
    }
  }
});

// Reducer function created dyamically by toolkit
export default dogsSlice.reducer;
// Action creator  (created dynamically by toolkit)
export const { setDogs } = dogsSlice.actions;

