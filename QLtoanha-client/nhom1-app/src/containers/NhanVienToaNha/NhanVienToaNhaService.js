import axios from "axios";
import NhanVienToaNha from ".";

// export const getAllEmployees = () => {
//   //return axios.get("/api/user/all");
//   //alert( axios.defaults.headers.common["Authorization"]);
//   return axios.get("http://localhost:8081/shop/api/employees");  
// };
export const getNhanVienToaNhaByMaNV = maNV => {
  return axios.get(`http://localhost:8082/nhanvientoanha/${maNV}`);
};
export const deleteNhanVienToaNha = maNV => {
  return axios.delete(`http://localhost:8082/nhanvientoanha/${maNV}`);
};
export const addNewNhanVienToaNha = NhanVienToaNha => {
  return axios.post("http://localhost:8082/nhanvientoanha", NhanVienToaNha);
};
export const updateNhanVienToaNha = (maNV, NhanVienToaNha) => {
  return axios.put(`/api/user/update/${maNV}`, NhanVienToaNha);
};