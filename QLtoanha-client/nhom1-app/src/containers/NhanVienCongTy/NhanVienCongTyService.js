import axios from "axios";
import NhanVienCongTy from ".";
// export const getAllEmployees = () => {
//   //return axios.get("/api/user/all");
//   //alert( axios.defaults.headers.common["Authorization"]);
//   return axios.get("http://localhost:8081/shop/api/employees");  
// };
export const getNhanVienCongTyByMaNV = maNV => {
  return axios.get(`http://localhost:8082/nhanviencongty/${maNV}`);
};
export const deleteNHanVienCongTy = maNV => {
  return axios.delete(`http://localhost:8082/nhanviencongty/${maNV}`);
};
export const addNewNhanVienCongTy = NhanVienCongTy => {
  return axios.post("http://localhost:8082/nhanviencongty", NhanVienCongTy);
};
export const updateNhanVienCongTy = (maNV, NhanVienCongTy) => {
  return axios.put(`/api/user/update/${maNV}`, NhanVienCongTy);
};