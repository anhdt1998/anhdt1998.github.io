import axios from "axios";
import CongTyThue from ".";

export const getCongTyThueByMaCT = maCT => {
  return axios.get(`http://localhost:8082/congtythue/${maCT}`);
};
export const deleteCongTyThue = maCT => {
  return axios.delete(`http://localhost:8082/congtythue/${maCT}`);
};
export const addNewCongTyThue = CongTyThue => {
  return axios.post("http://localhost:8082/congtythue", CongTyThue);
};
export const updateCongTyThue = (maCT, CongTyThue) => {
  return axios.put(`/api/user/update/${maCT}`, CongTyThue);
};