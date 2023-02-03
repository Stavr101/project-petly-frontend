import axios from "axios";

axios.defaults.baseURL = process.env.REACT_APP_BASE_URL;

export const getAllNoticesPets = async () => {
  try {
    const { data } = await axios.get(`/notices`);
    return data;
  } catch (error) {
    console.log(error.message);
  }
};

export const getConditionPets = async (condition) => {
  try {
    const { data } = await axios.get(`/notices/`, condition);
    return data;
  } catch (error) {
    console.log(error.message);
  }
};

export const deletePets = async (id) => {
  try {
    const { data } = await axios.delete(`/notices/${id}`);
    return data;
  } catch (error) {
    console.log(error.message);
  }
};

export const fetchAdsByCategory = (category) => {
  return axios
    .get("/notices", { params: { category } })
    .then((response) => response.data.data);
};

export const fetchFavoriteAds = () => {
  return axios.get("/notices/favorite").then((response) => {
    return response.data.data;
  });
};

export const fetchOwnAds = () => {
  return axios.get("/notices/user").then((response) => {
    return response.data.data;
  });
};

// export const getPetsById = async (id) => {
//   try {
//     const { data } = await axios.get(`/notices/${id}`);
//     return data;
//   } catch (error) {
//     console.log(error.message);
//   }
// };
