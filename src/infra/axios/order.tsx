import axios from "axios";

const instance = axios.create({
  baseURL: "https://my-burger-builder-c52f0.firebaseio.com/",
});

export default instance;
