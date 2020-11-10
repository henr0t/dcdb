import axios from "axios";

const KEY = "insert key";

export default axios.create({
  baseURL: "https://api.themoviedb.org/3",
  headers: {
    Authorization: KEY,
  },
});
