import axios from "axios";

// export const getAllEmployees = () => {
//   //return axios.get("/api/user/all");
//   //alert( axios.defaults.headers.common["Authorization"]);
//   return axios.get("http://localhost:8081/shop/api/employees");  
// };
export const getDichVuByMaDV = maDV => {
  return axios.get(`http://localhost:8082/dichvu/${maDV}`);
};
export const deleteDichVu = maDV => {
  return axios.delete(`http://localhost:8082/dichvu/${maDV}`);
};
export const addNewDichVu = DichVu => {
  return axios.post("http://localhost:8082/dichvu", DichVu);
};
export const updateDichVu = (maDV, DichVu) => {
  return axios.put(`/api/user/update/${maDV}`, DichVu);
};