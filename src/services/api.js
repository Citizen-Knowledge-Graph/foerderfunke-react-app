import axios from 'axios';

const baseURL = '/';

// Create an Axios instance
const api = axios.create({
    baseURL: baseURL
});

export default api;
