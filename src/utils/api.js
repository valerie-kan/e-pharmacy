import axios from "axios";

export const api = axios.create({
  baseURL: "https://pharmacy-backend-kwps.onrender.com",
});
