import { createSlice } from "@reduxjs/toolkit";

const initialState = [];

const selectedDogsSlice = createSlice({
  name: "selectedDogs",
  initialState,
  reducers: {
    selectDog(state, action) {
      const dog = action.payload;
      state.push(dog);
    },
    unselectDog(state, action) {
      const dogToUnselect = action.payload;
      return state.filter(dog => dog !== dogToUnselect)
    }
  }
})

export default selectedDogsSlice.reducer;
export const { selectDog, unselectDog } = selectedDogsSlice.actions;