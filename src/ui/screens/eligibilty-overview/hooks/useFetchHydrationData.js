import { useState, useEffect } from 'react';
import readJson from '../../../../core/utilities/readJson';

export const useFetchHydrationData = () => {
    const [hydrationData, setHydrationData] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            const data = await readJson('assets/data/requirement-profiles/requirement-profiles-hydration.json');
            setHydrationData(data);
        };

        fetchData();
    }, []); // Empty dependency array ensures this runs only once

    return hydrationData;
};
