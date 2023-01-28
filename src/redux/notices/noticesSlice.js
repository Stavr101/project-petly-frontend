/* import { createSlice } from "@reduxjs/toolkit";
import {
  noticesSell,
  noticesForFree,
  noticesLostFound,
  noticesRemoveFavorite,
} from "./noticesOperation";

const handlePending = (state) => {
  state.isLoading = true;
};

const handleRejected = (state, { payload }) => {
  state.loading = false;
  state.error = payload;
};

const noticesSlice = createSlice({
  name: "notices",
  initialState: {
    pets: [],
    isLoading: false,
    error: null,
  },
  extraReducers: {
    [noticesSell.pending]: handlePending,
    [noticesSell.fulfilled](state, { payload }) {
      state.isLoading = false;
      state.error = null;
      state.pets = payload;
    },
    [noticesSell.rejected]: handleRejected,
    [noticesForFree.pending]: handlePending,
    [noticesForFree.fulfilled](state, { payload }) {
      state.isLoading = false;
      state.error = null;
      state.pets = payload;
    },
    [noticesForFree.rejected]: handleRejected,
    [noticesLostFound.pending]: handlePending,
    [noticesLostFound.fulfilled](state, { payload }) {
      state.isLoading = false;
      state.error = null;
      state.pets = payload;
    },
    [noticesLostFound.rejected]: handleRejected,
    [noticesRemoveFavorite.pending]: handlePending,
    [noticesRemoveFavorite.fulfilled](state, { payload }) {
      state.isLoading = false;
      state.error = null;
      const index = state.pets.findIndex((pet) => pet.id === payload.id);
      state.pets.splice(index, 1);
    },
    [noticesRemoveFavorite.rejected]: handleRejected,
  },
});

export const noticesReducer = noticesSlice.reducer;
 */
