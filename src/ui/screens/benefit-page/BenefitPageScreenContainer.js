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

const BenefitPageScreenContainer = () => {
    const { id } = useParams();
    const { t } = useTranslation();
    const [matchingGraph, setMatchingGraph] = useState(null);
    const language = useLanguageStore((state) => state.language);

    const benefitPageData = useFetchStaticBenefitPageData(id, language);
    const categoryTitles = useBuildCategoryTitles(id, language);
    const validatedStatus = useValidatedStatus(id);
    const activeUserId = useUserStore((state) => state.activeUserId);

    useEffect(() => {
        const fetchMatchingReport = async () => {
            if (id && activeUserId) {
                try {
                    const matchingGraph = await matchingEngineManager.fetchEvaluationGraph(activeUserId, id, language);
                    // console.log("matchingGraph", matchingGraph);
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
            benefitPageData={benefitPageData}
            validatedStatus={validatedStatus}
            categoryTitles={categoryTitles}
            matchingGraph={matchingGraph}
        />
    );
};

export default BenefitPageScreenContainer;
