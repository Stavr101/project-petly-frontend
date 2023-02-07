import { TrySharp } from "@mui/icons-material";
import axios from "axios";

axios.defaults.baseURL = process.env.REACT_APP_BASE_URL;

export const fetchAdsByCategory = (category, search) => {
  return axios
    .get(`/notices/category/${category}?search=${search}`)
    .then((response) => response.data);
};

export const fetchOwnAds = () => {
  return axios.get("/notices/own").then((response) => {
    return response.data;
  });
};

export const getPetsById = async (id) => {
  const response = await axios.get(`/notices/notice/${id}`);
  return response.data;
};

export async function addPetToFavorite(id) {
  try {
    const res = await axios.patch(`/notices/favorite/${id}`);
    return res.data;
  } catch (error) {
    console.log(error.message);
  }
}

export async function removeFavoritePet(id) {
  try {
    const res = await axios.delete(`/notices/favorite/${id}`);
    return res.data;
  } catch (error) {
    console.log(error.message);
  }
}

export async function fetchFavorite(search) {
  try {
    const res = await axios.get(`/notices/favorite?search=${search}`);
    return res.data;
  } catch (error) {
    console.log(error.message);
  }
}

export async function fetchOwn(search) {
  try {
    const res = await axios.get(`/notices/own?search=${search}`);
    return res.data;
  } catch (error) {
    console.log(error.message);
  }
}

export const addPetToCategory = async (data) => {
  try {
    const res = await axios.post(`/notices`, data);
    return res.data;
  } catch (error) {
    console.log(error.message);
  }
};
