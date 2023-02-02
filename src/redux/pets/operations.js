import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

axios.defaults.baseURL = process.env.REACT_APP_BASE_URL;

// POST @ /user   Add Pet

export const addPet = createAsyncThunk(
  'user/addPet',
  async ({ name, date, breed, avatarUrl, comment, _id, owner }, thunkAPI) => {
    try {
      const response = await axios.post('/user', {
        name,
        date,
        breed,
        avatarUrl,
        comment,
        _id,
        owner,
      });
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

// GET @ /user/pets    Get pets info

export const getPetInfo = createAsyncThunk('pets/get', async (_, thunkAPI) => {
  try {
    const res = await axios.get('/user/pets');

    return res.data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
});

// DELETE @ /user/:id
export const deletePet = createAsyncThunk(
  'user/deletePet',
  async (_id, thunkAPI) => {
    try {
      const response = await axios.delete(`/user/${_id}`);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
