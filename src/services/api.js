import axios from 'axios';
import { getToken } from './auth';

const port = process.env.REACT_APP_BACKEND_PORT;
const backendUrl = process.env.REACT_APP_BACKEND_URL != null
  ? process.env.REACT_APP_BACKEND_URL
  : 'http://back.localhost';

  // eslint-disable-next-line 
const apiUrl = port != null && port != 80
  ? `${backendUrl}:${port}/api/v1`
  : `${backendUrl}/api/v1`;

const api = axios.create({
  baseURL: apiUrl,
})

api.interceptors.request.use(async config => {
  const token = getToken();
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});


export default api;
