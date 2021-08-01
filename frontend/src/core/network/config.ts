/* eslint-disable prefer-const */
import axios, { AxiosRequestConfig } from "axios";



let config = {
  api: {
    baseURL: process.env.REACT_APP_BASE_URL,
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
  },
};

export const api = axios.create({ ...config.api });

api.interceptors.request.use(
  async (conf: AxiosRequestConfig) => {
    conf.headers = {
      ...conf.headers,
    };
    return conf;
  },
  (err) => {
    return err.response;
  }
);

// api.interceptors.response.use(
//   async (response: any) => {
//     console.log("response", response);
//     return response;
//   },
//   (err) => {
//     console.log("err", err);
//     return err.response;
//   }
// );
