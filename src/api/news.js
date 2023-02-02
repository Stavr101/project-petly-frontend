import axios from "axios";

axios.defaults.baseURL = process.env.REACT_APP_BASE_URL;

export const getAllNews = async () => {
  const response = await axios.get(`/news`);
  return response.data;
};

// export const searchNews = async (query) => {
//   const response = await axios.get(`search/news?query=${query}`);
//   return await response.data;
// };
