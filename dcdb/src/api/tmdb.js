import axios from "axios";

const KEY = REACT_APP_TMDB_API_KEY;

export default axios.create({
  baseURL: "https://api.themoviedb.org/3",
  headers: {
    Authorization: KEY,
  },
});
