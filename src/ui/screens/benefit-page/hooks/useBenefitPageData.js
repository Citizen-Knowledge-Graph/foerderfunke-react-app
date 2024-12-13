import { useMemo } from 'react';

const useBenefitPageData = (id, metadata) => {
    return useMemo(() => {
        if (!metadata || !id) return null;

        const rpUri = id.startsWith("ff:")
            ? `https://foerderfunke.org/default#${id.split(":")[1]}`
            : id;

        return metadata.rp?.[rpUri] || null;
    }, [id, metadata]);
};

export default useBenefitPageData;
