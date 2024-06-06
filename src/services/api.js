import axios from 'axios';

const baseURL = process.env.NODE_ENV === 'production' ?
    '/foerderfunke-react-app/' :
    '/';

// Create an Axios instance
const api = axios.create({
    baseURL: baseURL
});

export default api;
