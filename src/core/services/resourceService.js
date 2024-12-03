import axiosClient from '../clients/axiosClient';

const resourceService = {
    async fetchResource (filePath) {
        const response = await axiosClient.get(filePath);
        return response.data;
    }
};

export default resourceService;
