import { createSlice } from '@reduxjs/toolkit';
import { getUserInfo, updateUserData, updateUserAvatar } from './operations';

const initialState = {
  user: {
    name: '',
    email: '',
    phone: '',
    birthday: '',
    address: '',
    avatarUrl: '',
  },
  isLoading: false,
  error: null,
};

const isPending = state => {
  state.isLoading = true;
  console.log('pending');
};

const isRejected = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
  console.log('error');
};

const usersSlice = createSlice({
  name: 'users',
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

      // const index = state.user.findIndex(item => item === action.payload);
      // state.user.splice(index, 1, action.payload);
      state.user = action.payload;
    },
    [updateUserAvatar.fulfilled](state, action) {
      state.isLoading = false;
      state.error = null;
      state.user = action.payload;
    },
  },
});

export const usersReducer = usersSlice.reducer;
