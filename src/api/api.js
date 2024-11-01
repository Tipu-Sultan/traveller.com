// api/api.js
import axios from 'axios';

const api = axios.create({
  baseURL: `${process.env.REACT_APP_API}/api`,
  headers: { 'Content-Type': 'application/json' },
});
export default api;
