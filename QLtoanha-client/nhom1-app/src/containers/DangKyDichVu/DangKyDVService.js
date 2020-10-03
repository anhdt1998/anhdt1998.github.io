import axios from "axios";

export const getDangKyDichVuByMaDV = maDK => {
  return axios.get(`http://localhost:8082/dangkydichvu/${maDK}`);
};
export const deleteDangKyDichVu = maDK => {
  return axios.delete(`http://localhost:8082/dangkydichvu/${maDK}`);
};
export const addNewDangKyDichVu = DangKyDichVu => {
  return axios.post("http://localhost:8082/dangkydichvu", DangKyDichVu);
};
export const updateDangKyDichVu = (maDK, DangKyDichVu) => {
  return axios.put(`/api/user/update/${maDK}`, DangKyDichVu);
};