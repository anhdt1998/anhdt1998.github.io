import axios from "axios";
import The from ".";

export const getTheByMaT = maT => {
  return axios.get(`http://localhost:8082/the/${maT}`);
};
export const deleteThe = maT => {
  return axios.delete(`http://localhost:8082/the/${maT}`);
};
export const addNewThe = The => {
  return axios.post("http://localhost:8082/the", The);
};
export const updateThe = (maT, The) => {
  return axios.put(`/api/user/update/${maT}`, The);
};