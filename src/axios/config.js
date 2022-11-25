
import axios from "axios";

const storeFetch = axios.create({
  baseURL: "https://dummyjson.com",
  headers: {
    "Content-Type": "application/json",
  },
});

export default storeFetch;