import React from 'react';
import { useParams } from "react-router-dom";
import useTranslation from "@/ui/language/useTranslation";
import useFetchStaticBenefitPageData from './hooks/useFetchStaticBenefitPageData';
import useValidatedStatus from "./hooks/useValidatedStatus";
import useBuildCategoryTitles from "./hooks/useBuildCategoryTitles";
import BenefitPageScreen from './BenefitPageScreen';
import { useLanguageStore } from '@/ui/storage/useLanguageStore';

const BenefitPageScreenContainer = () => {
    const { id } = useParams();
    const { t } = useTranslation();
    const language = useLanguageStore((state) => state.language);

    const benefitPageData = useFetchStaticBenefitPageData(id, language);
    const categoryTitles = useBuildCategoryTitles(id, language);
    const validatedStatus = useValidatedStatus(id);
    
    return (
        <BenefitPageScreen
            t={t}
            id={id}
            benefitPageData={benefitPageData}
            validatedStatus={validatedStatus}
            categoryTitles={categoryTitles}
        />
    );
};

export default BenefitPageScreenContainer;
