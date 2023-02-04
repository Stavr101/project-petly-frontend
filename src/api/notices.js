import axios from "axios";

axios.defaults.baseURL = process.env.REACT_APP_BASE_URL;

// export const getAllNoticesPets = async () => {
//   try {
//     const { params: { category } } = await axios.get(`/notices/category/:categoryName`);
//     return category;
//   } catch (error) {
//     console.log(error.message);
//   }
// };

// export const getConditionPets = async (condition) => {
//   try {
//     const { data } = await axios.get(`/notices/`, condition);
//     return data;
//   } catch (error) {
//     console.log(error.message);
//   }
// };

// export const deletePets = async (id) => {
//   try {
//     const { data } = await axios.delete(`/notices/${id}`);
//     return data;
//   } catch (error) {
//     console.log(error.message);
//   }
// };

export const fetchAdsByCategory = category => {
  return axios
    .get('/notices/category/sell', { params: { category } })
    .then(response => response.data);
};

export const fetchFavoriteAds = () => {
  return axios.get('/notices/favorite').then(response => {
    return response.data;
  });
};

export const fetchOwnAds = () => {
  return axios.get('/notices/own').then(response => {
    return response.data;
  });
};
