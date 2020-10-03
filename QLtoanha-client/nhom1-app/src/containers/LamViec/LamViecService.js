import axios from "axios";

export const getLamDichVuByMaDV = maLV => {
  return axios.get(`http://localhost:8082/lamdichvu/${maLV}`);
};
export const deleteLamDichVu = maLV => {
  return axios.delete(`http://localhost:8082/lamdichvu/${maLV}`);
};
export const addNewLamDichVu = LamDichVu => {
  return axios.post("http://localhost:8082/lamdichvu", LamDichVu);
};
export const updateLamDichVu = (maLV, LamDichVu) => {
  return axios.put(`/api/user/update/${maLV}`, LamDichVu);
};