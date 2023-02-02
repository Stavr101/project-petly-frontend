import axios from "axios";
import { REACT_APP_BASE_URL } from "services/baseurl";

axios.defaults.baseURL = REACT_APP_BASE_URL;

export const getAllNews = async (pageNumber=1) => {
  const response = await axios.get(`news?page=${pageNumber}`);
  return response.data;
};
