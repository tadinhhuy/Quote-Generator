import axios, { AxiosInstance, AxiosRequestConfig, AxiosResponse } from 'axios';
import ENDPOINTS from '../constants/endpoints';
import { hasFiles, objectToFormData } from '../helpers/form';

const instance: AxiosInstance = axios.create({
  headers: {
    Accept: 'application/json',
  },
});

// add a request interceptor
instance.interceptors.request.use((config: AxiosRequestConfig) => {
  // set base url
  if (ENDPOINTS.BASE_URL) {
    config.baseURL = ENDPOINTS.BASE_URL;
  }

  // config request for upload file
  if (hasFiles(config.data)) {
    const fd = objectToFormData(config.data);

    // set data
    config.data = fd;

    // set multipart headers
    config.headers['Content-Type'] = 'multipart/form-data';
  }

  return config;
});

// add a response interceptor
instance.interceptors.response.use(
  (response: AxiosResponse) => {

    return response;
  },
  (error: any) => {
    // do something on error

    return Promise.reject(error);
  }
);

export default instance;
