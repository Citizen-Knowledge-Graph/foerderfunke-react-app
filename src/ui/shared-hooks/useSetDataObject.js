import { useEffect } from 'react';
import resourceService from '../../core/services/resourceService';

const useSetDataObject = (filePath, setData) => {
    useEffect(() => {
        const fetchData = async () => {
            try {
                const data = await resourceService(filePath);
                setData(data);
            } catch (err) {
                console.error('Failed to fetch data:', err);
            }
        };

        fetchData();
    }, [filePath, setData]);
};

export default useSetDataObject;
