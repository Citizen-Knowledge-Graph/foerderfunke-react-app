import { useEffect } from 'react';
import readJson from '../../core/utilities/readJson';

const useSetDataObject = (filePath, setData) => {
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

export default useSetDataObject;
