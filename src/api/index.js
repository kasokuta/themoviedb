import axios from 'axios';
import constants from '../constants';

const api = axios.create({
  baseURL: constants.url,
});

export default api;
