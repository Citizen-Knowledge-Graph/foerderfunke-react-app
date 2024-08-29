import { useEffect } from 'react';
import readJson from '../utilities/readJson';

const useFetchData = (filePath, setData) => {
    useEffect(() => {
        const fetchData = async () => {
            try {
                const data = await readJson(filePath);
                setData(data);
            } catch (err) {
                console.error('Failed to fetch data:', err);
            }
        };

        fetchData();
    }, [filePath, setData]);
};

export default useFetchData;
