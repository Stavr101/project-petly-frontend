import * as api from "../../api/notices";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const noticesSell = createAsyncThunk(
  "/notices/sell",
  async (_, thunkApi) => {
    try {
      const data = await api.noticesSell();
      return data;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);

export const noticesLostFound = createAsyncThunk(
  "/notices/lost-found",
  async (_, thunkApi) => {
    try {
      const data = await api.noticesLostFound();
      return data;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);

export const noticesForFree = createAsyncThunk(
  "/notices/for-free",
  async (_, thunkApi) => {
    try {
      const data = await api.noticesForFree();
      return data;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);

export const noticesRemoveFavorite = createAsyncThunk(
  `/notices/${id}`,
  async (id, { rejectWithValue }) => {
    try {
      await api.noticesRemoveFavorite(id);
      return id;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
