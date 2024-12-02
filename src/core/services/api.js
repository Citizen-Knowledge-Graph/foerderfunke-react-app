import axios from 'axios';

const baseURL = '/';

const api = axios.create({
    baseURL: baseURL
});

export default api;
