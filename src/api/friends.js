import axios from "axios";

axios.defaults.baseURL = "https://project-petly-backend.onrender.com/api/v1/";

export const getAllFriends = async () => {
  const response = await axios.get(`services`);
  return response.data;
};
