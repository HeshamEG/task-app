import { api } from ".";

const get = (url: string, params: any) => {
  return api.get(url, {
    params, headers: {
      'Accept-Language': localStorage.getItem('lng')
    }
  });
}

const post = (url: string, data: any) => api.post(url, JSON.stringify(data), {
  headers: {
    'Accept-Language': localStorage.getItem('lng')
  }
});

const put = (url: string, data: any) => api.put(url, JSON.stringify(data), {
  headers: {
    'Accept-Language': localStorage.getItem('lng')
  }

});

const remove = (url: string) => api.delete(url, {
  headers: {
    'Accept-Language': localStorage.getItem('lng')
  }
});

const postWithParams = (url: string, data: any, params: any) =>
  api.post(`${process.env.BASE_URL}${url}/${params}`, JSON.stringify(data), {
    headers: {
      'Accept-Language': localStorage.getItem('lng')
    }
  });

const postFormData = (url: string, data: any) =>
  api.post(url, data, {
    headers: {
      "Content-Type": "multipart/form-data",
      'Accept-Language': localStorage.getItem('lng')
    },
  });

const putFormData = (url: string, data: any) =>
  api.put(url, data, {
    headers: {
      "Content-Type": "multipart/form-data",
      'Accept-Language': localStorage.getItem('lng')
    },
  });

const removewithBody = (url: string, data: any) =>
  api.delete(url, {
    data: data,
    headers: {
      'Accept-Language': localStorage.getItem('lng')
    }
  });

const setAuthHeaders = (token: string) => {
  api.defaults.headers.common["authorization"] = `${token}`;
};

const removeAuthHeaders = () => {
  api.defaults.headers.common["authorization"] = null;
  delete api.defaults.headers.common["authorization"];
};

export {
  get,
  post,
  put,
  postFormData,
  putFormData,
  remove,
  postWithParams,
  removewithBody,
  setAuthHeaders,
  removeAuthHeaders,
};
