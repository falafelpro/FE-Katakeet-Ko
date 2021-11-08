import axios from "axios";

const apis = axios.create({
  baseURL: "http://localhost:8000/apis",
});

export default apis;
