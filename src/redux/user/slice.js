import { createSlice } from '@reduxjs/toolkit';
import { logOut } from 'redux/auth/operations';
import { getUserInfo, addPet, getPetInfo, deletePet } from './operations';

const handlePending = state => {
  state.isLoading = true;
};

const handleRejected = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
};

const userSlice = createSlice({
  name: 'user',
  initialState: {
    items: [],
    isLoading: false,
    error: null,
  },
  extraReducers: {
    [getUserInfo.pending]: handlePending,
    // [addPet.pending]: handlePending,
    // [getPetInfo.pending]: handlePending,
    // [deletePet.pending]: handlePending,

    [getUserInfo.rejected]: handleRejected,
    // [addPet.rejected]: handleRejected,
    // [getPetInfo.rejected]: handleRejected,
    // [deletePet.rejected]: handleRejected,

    [getUserInfo.fulfilled](state, action) {
      state.isLoading = false;
      state.error = null;
      state.items = action.payload;
    },
    // [addPet.fulfilled](state, action) {
    //   state.isLoading = false;
    //   state.error = null;
    //   state.items.push(action.payload);
    // },
    // [getPetInfo.fulfilled](state, action) {
    //   state.isLoading = false;
    //   state.error = null;
    //   state.items = action.payload;
    // },
    // [deletePet.fulfilled](state, action) {
    //   state.isLoading = false;
    //   state.error = null;
    //   const index = state.items.findIndex(
    //     pet => pet._id === action.payload._id
    //   );
    //   state.items.splice(index, 1);
    // },
    // [patchContact.fulfilled](state, action) {
    //   state.isLoading = false;
    //   state.error = null;
    //   const index = state.items.findIndex(
    //     contact => contact.id === action.payload.id
    //   );
    //   state.items.splice(index, 1);
    // },
    [logOut.fulfilled](state) {
      state.items = [];
      state.error = null;
      state.isLoading = false;
    },
  },
});

export const userReducer = userSlice.reducer;
