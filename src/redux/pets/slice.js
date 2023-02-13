import { createSlice } from '@reduxjs/toolkit';
import { addPet, getPetInfo, deletePet } from './operations';

const initialState = {
  items: [],
  isLoading: false,
  error: null,
};

const isPending = state => {
  state.isLoading = true;
};

const isRejected = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
};

const petsSlice = createSlice({
  name: 'pets',
  initialState: initialState,
  extraReducers: {
    [getPetInfo.pending]: isPending,
    [getPetInfo.fulfilled](state, action) {
      state.isLoading = false;
      state.error = null;
      state.items = action.payload;
    },
    [getPetInfo.rejected]: isRejected,
    [addPet.pending]: isPending,
    [addPet.fulfilled](state, action) {
      state.isLoading = false;
      state.error = null;
      state.items.push(action.payload);
    },
    [addPet.rejected]: isRejected,
    [deletePet.pending]: isPending,
    [deletePet.fulfilled](state, action) {
      state.isLoading = false;
      state.error = null;
      const { _id } = action.payload;
      const index = state.items.findIndex(pet => pet._id === _id);
      state.items.splice(index, 1);
    },
    [deletePet.rejected]: isRejected,
  },
});

export const petsReducer = petsSlice.reducer;
