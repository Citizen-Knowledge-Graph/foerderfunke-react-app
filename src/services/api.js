import axios from 'axios';

// Create an Axios instance
const api = axios.create({
    baseURL: '/', // Set the base URL
});

export default api;
