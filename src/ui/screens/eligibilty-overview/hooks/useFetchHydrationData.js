import { useState, useEffect } from 'react';
import resourceService from '../../../../core/services/resourceService';

export const useFetchHydrationData = () => {
    const [hydrationData, setHydrationData] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            const data = await resourceService('assets/data/requirement-profiles/requirement-profiles-hydration.json');
            setHydrationData(data);
        };

        fetchData();
    }, []); // Empty dependency array ensures this runs only once

    return hydrationData;
};
