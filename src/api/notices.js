import axios from "axios";

axios.defaults.baseURL = "https://project-petly-backend.onrender.com/api/v1/";

export const getAllNoticesPets = async () => {
  try {
    const { data } = await axios.get(`notices`);
    return data;
  } catch (error) {
    console.log(error.message);
  }
};

export const getConditionPets = async (condition) => {
  try {
    const { data } = await axios.get(`notices`, condition);
    return data;
  } catch (error) {
    console.log(error.message);
  }
};
