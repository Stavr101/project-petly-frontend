import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';


axios.defaults.baseURL = process.env.REACT_APP_BASE_URL;

// GET @ /user
export const getUserInfo = createAsyncThunk('user/get', async (_, thunkAPI) => {
  try {
    const res = await axios.get('/user');

    return res.data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
});

// // POST @ /user   Add Pet

// export const addPet = createAsyncThunk(
//   'user/addPet',
//   async ({ name, date, breed, avatarUrl, comment, _id, owner }, thunkAPI) => {
//     try {
//       const response = await axios.post('/user', {
//         name,
//         date,
//         breed,
//         avatarUrl,
//         comment,
//         _id,
//         owner,
//       });
//       return response.data;
//     } catch (error) {
//       return thunkAPI.rejectWithValue(error.message);
//     }
//   }
// );

// // GET @ /user/pets    Get pets info

// export const getPetInfo = createAsyncThunk('pets/get', async (_, thunkAPI) => {
//   try {
//     const res = await axios.get('/user/pets');

//     return res.data;
//   } catch (error) {
//     return thunkAPI.rejectWithValue(error.message);
//   }
// });

// // DELETE @ /user/:id
// export const deletePet = createAsyncThunk(
//   'user/deletePet',
//   async (_id, thunkAPI) => {
//     try {
//       const response = await axios.delete(`/user/${_id}`);
//       return response.data;
//     } catch (error) {
//       return thunkAPI.rejectWithValue(error.message);
//     }
//   }
// );

// PATCH @ /userAvatar
// export const changeUserAvatar = createAsyncThunk(
//   'user/avatar',
//   async (user, thunkAPI) => {
//     console.log('user avatar', user);
//     try {
//       const response = await axios.patch('/user/avatar', user);
//       console.log('response :', response.data);
//       return response.data;
//     } catch (e) {
//       return thunkAPI.rejectWithValue(e.message);
//     }
//   }
// );

// PATCH @ /userData
// export const updateUserData = createAsyncThunk(
//   'user/changeUserData',
//   async (user, thunkAPI) => {
//     console.log('user data', user);
//     try {
//       const response = await axios.patch('/user', user);
//       console.log('response :', response.data);
//       return response.data;
//     } catch (e) {
//       return thunkAPI.rejectWithValue(e.message);
//     }
//   }
// );
