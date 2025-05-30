// src/axiosConfig.js
import axios from "axios";

const instance = axios.create({
  baseURL: "http://localhost:5000",
  headers: {
    "Content-Type": "application/json",
  },
  withCredentials: true // optional, for cookies/sessions
});

export default instance;
