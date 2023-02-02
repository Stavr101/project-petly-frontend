import axios from "axios";
import { REACT_APP_BASE_URL } from "services/baseurl";

axios.defaults.baseURL = "https://project-petly-backend.onrender.com/api/v1/";

export const getAllNews = async () => {
  const response = await axios.get(`news`);
  return response.data;
};
