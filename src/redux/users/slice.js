import { createSlice } from "@reduxjs/toolkit";
import { getUserInfo, updateUserData, updateUserAvatar } from "./operations";

const initialState = {
  user: {

    _id: "",
    name: "",
    email: "",
    phone: "",
    birthday: "",
    address: "",
    avatarUrl: "",
    favorite: [],
  },
  isLoading: false,
  error: null,
};

const isPending = (state) => {
  state.isLoading = true;
};

const isRejected = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
};

const userSlice = createSlice({
  name: "user",
  initialState,
  extraReducers: {
    [getUserInfo.pending]: isPending,
    [updateUserData.pending]: isPending,
    [updateUserAvatar.pending]: isPending,

    [getUserInfo.rejected]: isRejected,
    [updateUserData.rejected]: isRejected,
    [updateUserAvatar.rejected]: isRejected,

    [getUserInfo.fulfilled](state, action) {
      state.isLoading = false;
      state.error = null;
      state.user = action.payload;
    },
    [updateUserData.fulfilled](state, action) {
      state.isLoading = false;
      state.error = null;
      state.user = action.payload;
    },
    [updateUserAvatar.fulfilled](state, action) {
      state.isLoading = false;
      state.error = null;
      state.user = action.payload;
    },
  },
});

export const userReducer = userSlice.reducer;
