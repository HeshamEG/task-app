import { api } from '..';

api.interceptors.response.use(
  async (response) => {
    return response;
  },
  (err) => {
    console.error('err', err);
    return err.response;
  },
);