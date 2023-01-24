import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

// GET @ /contacts
export const fetchContacts = createAsyncThunk(
  'contacts/get',
  async (_, thunkAPI) => {
    try {
      const res = await axios.get('/contacts');

      return res.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

// POST @ /contacts
export const addContact = createAsyncThunk(
  'contacts/addContact',
  async (user, thunkAPI) => {
    console.log('user operations', user);
    try {
      const response = await axios.post('/contacts', user);
      console.log('response :', response.data);
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

// DELETE @ /contacts/:id
export const deleteContact = createAsyncThunk(
  'contacts/deleteContact',
  async (id, thunkAPI) => {
    console.log(id);
    try {
      const response = await axios.delete(`/contacts/${id}`);
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);
// PATCH @ /contacts/:id
export const patchContact = createAsyncThunk(
  'contacts/patchContact',
  async (id, thunkAPI) => {
    try {
      const response = await axios.delete(`/contacts/${id}`);
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);
