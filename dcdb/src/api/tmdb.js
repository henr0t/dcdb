import axios from "axios";

export default axios.create({
  baseURL: "https://api.themoviedb.org/3",
  headers: {
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlOGY3MjlkMjYxOThkNWYwMWNhNDA0ZTA5NGZlZjY0NSIsInN1YiI6IjVmODQwMDg2NjA4MmViMDAzNmVlYjk0OCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.aCq1tjVknOsHHCFna78rXJbIXIUbPQJcycjj6YaOuB8",
  },
});
