import axios from "axios";

const instance = axios.create({
  baseURL: "https://tasks.dev/api",
});

export default instance;
