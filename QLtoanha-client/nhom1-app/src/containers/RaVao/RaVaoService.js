import axios from "axios";
import RaVao from ".";

export const getRaVaoByMaRV = maRV => {
  return axios.get(`http://localhost:8082/ravao/${maRV}`);
};
export const deleteRaVao = maRV => {
  return axios.delete(`http://localhost:8082/ravao/${maRV}`);
};
export const addNewRaVao = RaVao => {
  return axios.post("http://localhost:8082/ravao", RaVao);
};
export const updateRaVao = (maRV, RaVao) => {
  return axios.put(`/api/user/update/${maRV}`, RaVao);
};