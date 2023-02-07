import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

axios.defaults.baseURL = process.env.REACT_APP_BASE_URL;

// GET @ /user
export const getUserInfo = createAsyncThunk('user/get', async (_, thunkAPI) => {
  try {
    const res = await axios.get(`/user`);
    return res.data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
});

// PUT @ /userData
export const updateUserData = createAsyncThunk(
  'user/updateUserData',
  async (user, thunkAPI) => {
    // console.log('user data', user);
    try {
      const response = await axios.patch(`/user`, user);
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const updateUserAvatar = createAsyncThunk(
  'users/updateAvatar',
  async ({ avatarUrl }, { rejectWithValue }) => {
    try {
      const { data } = await axios.patch('auth/avatars', avatarUrl);
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
// export const updateUserAvatar = createAsyncThunk(
//   'users/updateAvatar',
//   async ({ avatarUrl }, { rejectWithValue }) => {
//     try {
//       const { data } = await axios.put('/users/:userId', avatarUrl);
//       return data;
//     } catch (error) {
//       return rejectWithValue(error.message);
//     }
//   }
// );
