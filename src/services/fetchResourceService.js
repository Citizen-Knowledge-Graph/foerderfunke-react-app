import { useEffect } from 'react';
import readJson from '../utilities/readJson';

const useFetchData = (filePath, setData, setLoaded) => {
    useEffect(() => {
        const fetchData = async () => {
            setLoaded(false);
            try {
                const data = await readJson(filePath);
                setData(data);
                setLoaded(true);
            } catch (err) {
                console.error('Failed to fetch data:', err);
                setLoaded(false);
            }
        };

        fetchData();
    }, [filePath, setData, setLoaded]);
};

export default useFetchData;
