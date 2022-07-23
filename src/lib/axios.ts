import axios, { AxiosInstance } from 'axios';

const client: AxiosInstance = axios.create({
  // withCredentials: true,
});

client.defaults.baseURL = 'http://localhost:3000';
if (typeof window !== 'undefined') {
  // Perform localStorage action
  const auth = localStorage.getItem('accessToken');
  if (auth) {
    client.defaults.headers.common.Authorization = `Bearer ${auth}`;
  }
}

export default client;
