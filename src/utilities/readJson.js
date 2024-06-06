import api from '../services/api';

const readJson = async (filePath) => {
    try {
        const response = await api.get(filePath);
        return response.data; // Axios stores the response data in `data` property
    } catch (error) {
        console.error('Error fetching JSON:', error);
        throw new Error('Network response was not ok');
    }
};

export default readJson;
