import axios from 'axios';

const baseURL = '/';

const axiosClient = axios.create({
    baseURL: baseURL
});

export default axiosClient;
