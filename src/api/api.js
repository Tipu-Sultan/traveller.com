// api/api.js
import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:5000/api',
  headers: { 'Content-Type': 'application/json' },
});

export const fetchPlaces = (query) => api.get(`/places?search=${query}`);
export const fetchPlaceDetails = (id) => api.get(`/places/${id}`);

export default api;
