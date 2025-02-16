import { useEffect, useState } from "react";

const useFetchBenefitPageData = (id, hydrationData, language) => {
    const [benefitPageData, setBenefitPageData] = useState(null);
    const rpUri = `https://foerderfunke.org/default#${id.split(":")[1]}`;

    useEffect(() => {
        if (hydrationData) {
            const title = hydrationData[rpUri]?.title?.[language] || 'Unknown Title';
            const leikaId = hydrationData[rpUri]?.leika_id || 'Unknown Id';
            const description = hydrationData[rpUri]?.description?.[language] || 'Unknown Description';
            const status = hydrationData[rpUri]?.status || 'Unknown Status';
            const applicationProcess = hydrationData[rpUri]?.application_process?.[language] || {};
            const requiredDocuments = hydrationData[rpUri]?.required_documents?.[language] || [];
            const additionalSupport = hydrationData[rpUri]?.additional_support?.[language] || {};
            const legalBasis = hydrationData[rpUri]?.legal_basis?.[language] || {};
            const furtherInformation = hydrationData[rpUri]?.further_information?.[language] || [];
            const data = { title, leikaId, description, status, applicationProcess, requiredDocuments, additionalSupport, legalBasis, furtherInformation };
            setBenefitPageData(data);
        }
    }, [rpUri, hydrationData, language]);

    return benefitPageData;
};

export default useFetchBenefitPageData;