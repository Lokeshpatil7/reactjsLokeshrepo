import axios from "axios";

const BASE_URL = "http://localhost:8085";

export const getCustomersList = () => {
  return axios.get(BASE_URL + "/Customer1/list");
};

export const getCustomersById = (customerId) => {
  return axios.get(BASE_URL + "/Customer1/get/" + customerId);
};
