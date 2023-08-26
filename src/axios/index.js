import axios from "axios";
import { ProjectConfig } from "../config/index.js";
import { success, failure } from "../service/HttpResponse.js";
// import store from "../store/index.js";

const MAxios = axios.create({
  baseURL: ProjectConfig.ApiConnection,
  headers: {
    "Access-Control-Allow-Origin": "*",
    Accept: "application/json",
    "Content-Type": "application/json",
  },
});

MAxios.interceptors.response.use(
  function (response) {
    return success(response);
  },
  function (error) {
    return failure(error.response);
  }
);

export default MAxios;
