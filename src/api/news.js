import axios from "axios";

axios.defaults.baseURL = "https://project-petly-backend.onrender.com/api/v1/";

export const getAllNews = async () => {
  const response = await axios.get(`news`);
  return response.data;
};

// export const searchNews = async (query) => {
//   const response = await axios.get(`search/news?query=${query}`);
//   return await response.data;
// };
