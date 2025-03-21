import { useEffect, useState } from 'react';
import resourceService from '../../core/services/resourceService';

const useFetchData = (filePath) => {
    const [data, setData] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const fetchedData = await resourceService.fetchResource(filePath);
                setData(fetchedData);
            } catch (err) {
                console.error('Failed to fetch data:', err);
            }
        };

        if (filePath) {
            fetchData();
        }
    }, [filePath]);

    return data;
};

export default useFetchData;
