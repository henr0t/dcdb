import axios from "axios";

const filmappAPI = axios.create({
  baseURL: "http://localhost:8082",
  headers: {},
});

filmappAPI.interceptors.request.use(
  (config) => {
    config.headers.Authorization = localStorage.getItem("token");
    return config;
  },

  (error) => Promise.reject(error)
);

export default filmappAPI;
