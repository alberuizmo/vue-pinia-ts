import axios, { type AxiosInstance } from "axios";

const BaseApi: AxiosInstance = axios.create({
  baseURL: "https://reqres.in/api/",
  headers: {
    "Content-type": "application/json",
  },
});

BaseApi.interceptors.request.use(
  function (config) {
    //recuperar token de donde se este guardando
    const token = sessionStorage.getItem("token");
    if (token && config.headers) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  function (err) {
    return Promise.reject(err);
  }
);

BaseApi.interceptors.response.use(
  function (response) {
    return response;
  },
  function (error) {
    console.log("error in interceptor");
    //if (error.response.status == "401") {
    //refrescar token o redirigir al login
    //Return to login in error 401
    //}
    return Promise.reject(error);
  }
);

export default BaseApi;
