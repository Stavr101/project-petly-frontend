import axios from "axios";

export const noticesSell = async () => {
  const { data } = await axios.get("/notices/sell");
  return data;
};

export const noticesLostFound = async () => {
  const { data } = await axios.get("/notices/lost-found");
  return data;
};

export const noticesForFree = async () => {
  const { data } = await axios.get("/notices/for-free");
  return data;
};

export const noticesRemoveFavorite = async (id) => {
  const { data } = await axios.delete(`/notices/${id}`);
  return data;
};
