import axios from "axios";

axios.defaults.baseURL = process.env.REACT_APP_BASE_URL;

export const getAllFriends = async () => {
  const response = await axios.get(`services`);
  return response.data;
};
