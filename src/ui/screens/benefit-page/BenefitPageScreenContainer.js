import React, { useState, useEffect } from 'react';
import { useParams } from "react-router-dom";
import useTranslation from "@/ui/language/useTranslation";
import useFetchStaticBenefitPageData from './hooks/useFetchStaticBenefitPageData';
import useValidatedStatus from "./hooks/useValidatedStatus";
import useBuildCategoryTitles from "./hooks/useBuildCategoryTitles";
import BenefitPageScreen from './BenefitPageScreen';
import { useLanguageStore } from '@/ui/storage/useLanguageStore';
import matchingEngineManager from "@/core/managers/matchingEngineManager";
import { useUserStore } from '@/ui/storage/zustand';
import { useStore } from "@/ui/shared-components/ViewportUpdater";
import { useFetchLocaliseData } from './hooks/useFetchLocalisedData';
import useFetchData from '@/ui/shared-hooks/utility/useFetchResource';

const BenefitPageScreenContainer = () => {
    const { id } = useParams();
    const { t } = useTranslation();
    const isDesktop = useStore((state) => state.isDesktop);
    const [matchingGraph, setMatchingGraph] = useState(null);
    const language = useLanguageStore((state) => state.language);

    const benefitPageData = useFetchStaticBenefitPageData(id, language);
    const categoryTitles = useBuildCategoryTitles(id, language);
    const {validatedStatus, validationResult} = useValidatedStatus(id);
    const activeUserId = useUserStore((state) => state.activeUserId);
    const localisedData = useFetchLocaliseData(benefitPageData);
    const xml = useFetchData(`assets/data/xml/${id.split(":")[1]}.xml`);

    useEffect(() => {
        const fetchMatchingReport = async () => {
            if (id && activeUserId) {
                try {
                    const matchingGraph = await matchingEngineManager.fetchEvaluationGraph(activeUserId, id, language);
                    setMatchingGraph(matchingGraph);
                } catch (error) {
                    console.error("Error fetching matching report:", error);
                }
            }
        }
        fetchMatchingReport();
    }, [id, activeUserId, language]);

    return (
        <BenefitPageScreen
            t={t}
            id={id}
            isDesktop={isDesktop}
            benefitPageData={benefitPageData}
            localisedData={localisedData}
            xml={xml}
            validatedStatus={validatedStatus}
            validationResult={validationResult}
            categoryTitles={categoryTitles}
            matchingGraph={matchingGraph}
        />
    );
};

export default BenefitPageScreenContainer;
