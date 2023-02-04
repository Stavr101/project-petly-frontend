import { createSlice } from '@reduxjs/toolkit';
import { logOut } from 'redux/auth/operations';
import { getUserInfo, updateUserData } from './operations';

const initialState = {
  user: {
    name: '',
    email: '',
    phone: '',
    birthday: '',
    address: '',
    avatarURL: '',
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

    [getUserInfo.rejected]: isRejected,
    [updateUserData.rejected]: isRejected,

    [getUserInfo.fulfilled](state, action) {
      state.isLoading = false;
      state.error = null;
      state.user = action.payload;
      // console.log(action, 'action');
    },
    [updateUserData.fulfilled](state, action) {
      state.isLoading = false;
      state.error = null;
      const index = state.user.findIndex(item => item === action);
      state.user.splice(index, 1, action.payload);
    },

    // [logOut.fulfilled](state) {
    //   state.items = [];
    //   state.error = null;
    //   state.isLoading = false;
    // },
  },
});

export const usersReducer = usersSlice.reducer;
