import { createSlice } from '@reduxjs/toolkit';
import { addPet, getPetInfo, deletePet } from './operations';

const initialState = {
  items: [],
  isLoading: false,
  error: null,
};

const isPending = store => {
  store.isLoading = true;
};

const isRejected = (store, action) => {
  store.isLoading = false;
  store.error = action.payload;
};

const petsSlice = createSlice({
  name: 'pets',
  initialState: initialState,
  extraReducers: {
    [getPetInfo.pending]: isPending,
    [getPetInfo.fulfilled](store, action) {
      store.isLoading = false;
      store.error = null;
      store.items = action.payload;
    },
    [getPetInfo.rejected]: isRejected,
    [addPet.pending]: isPending,
    [addPet.fulfilled](store, action) {
      store.isLoading = false;
      store.error = null;
      store.items.push(action.payload);
    },
    [addPet.rejected]: isRejected,
    [deletePet.pending]: isPending,
    [deletePet.fulfilled](store, action) {
      store.isLoading = false;
      store.error = null;

      const index = store.items.findIndex(
        user => user.id === action.payload.id
      );
      store.items.splice(index, 1);
    },
    [deletePet.rejected]: isRejected,
  },
});

export const petsReducer = petsSlice.reducer;
