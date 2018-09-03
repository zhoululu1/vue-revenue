import axios from 'axios';
import getConfig from '../config';

const { apiHost, apiPath } = getConfig();

const Client = axios.create({
  baseURL: `${apiHost}${apiPath}`,
  withCredentials: true,
});

Client.interceptors.response.use((response) => {
  const data = response.data;
  if (data.code) {
    return Promise.reject(data);
  }
  return data.data;
});

export default Client;

