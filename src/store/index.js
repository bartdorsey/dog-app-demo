import { configureStore } from '@reduxjs/toolkit';
import reduxLogger from 'redux-logger';
import dogsReducer from './dogsSlice';
import selectedDogsReducer from './selectedDogsSlice';

const store = configureStore({
  reducer: {
    dogs: dogsReducer,
    selectedDogs: selectedDogsReducer
  },
  middleware: (getDefaultMiddleware) => [...getDefaultMiddleware(), reduxLogger]
});

export default store;