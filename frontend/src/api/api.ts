import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:3030",
  headers: { "Access-Control-Allow-Origin": "http://localhost:3000/" },
});

export default api;
