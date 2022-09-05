import { AxiosRequestConfig, AxiosRequestHeaders } from 'axios';
import { api } from '.';

const get = (url: string, params?: AxiosRequestConfig<any>, headers?:AxiosRequestHeaders) => {
  return api.get(url, {
    params,
    headers: { ...headers },
  });
};

const post = (url: string, data: any, headers?:AxiosRequestHeaders) => api.post(url, JSON.stringify(data), {
  headers: { ...headers },
});

const put = (url: string, data: any, headers?:AxiosRequestHeaders) => api.put(url, JSON.stringify(data), {
  headers: { ...headers },
});

const remove = (url: string, headers?:AxiosRequestHeaders) => api.delete(url, {
  headers: { ...headers },
});

const postWithParams = (url: string, data: any, params?: AxiosRequestConfig<any>, headers?:AxiosRequestHeaders) =>
  api.post(`${url}/${params}`, JSON.stringify(data), {
    headers: { ...headers },
  });

const postFormData = (url: string, data: any, headers?:AxiosRequestHeaders) =>
  api.post(url, data, {
    headers: {
      ...headers,
      'Content-Type': 'multipart/form-data',
    },
  });

const putFormData = (url: string, data: any, headers?:AxiosRequestHeaders) =>
  api.put(url, data, {
    headers: { ...headers },
  });

const removeWithBody = (url: string, data: any, headers?:AxiosRequestHeaders) =>
  api.delete(url, {
    data: data,
    headers: { ...headers },
  });

export {
  get,
  post,
  put,
  postFormData,
  putFormData,
  remove,
  postWithParams,
  removeWithBody,
};
