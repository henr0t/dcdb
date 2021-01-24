import axios from "axios";

const localAPI = axios.create({
  baseURL: "https://dcdb-backend.herokuapp.com/",
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
