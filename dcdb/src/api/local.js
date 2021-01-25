import axios from "axios";

const localAPI = axios.create({
  baseURL: "http://localhost:8082",
  headers: {},
});

localAPI.interceptors.request.use(
  (config) => {
    config.headers.Authorization = localStorage.getItem("token");
    return config;
  },

  (error) => Promise.reject(error)
);

export default localAPI;
