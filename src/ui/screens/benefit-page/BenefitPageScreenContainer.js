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
import { useFetchCustomBenefitPageHints } from "@/ui/screens/benefit-page/hooks/useFetchCustomBenefitPageHints";
import useFetchData from '@/ui/shared-hooks/utility/useFetchResource';
import useFetchTargetClass from './hooks/useFetchTargetClass';
import featureFlags from '@/featureFlags';


const BenefitPageScreenContainer = () => {
    const { id } = useParams();
    const { t } = useTranslation();
    const isDesktop = useStore((state) => state.isDesktop);
    const [matchingGraph, setMatchingGraph] = useState(null);
    const [violations, setViolations] = useState(null);
    const language = useLanguageStore((state) => state.language);

    const benefitPageData = useFetchStaticBenefitPageData(id, language);
    const categoryTitles = useBuildCategoryTitles(id, language);
    const { validatedStatus, validationResult } = useValidatedStatus(id);
    const activeUserId = useUserStore((state) => state.activeUserId);
    const localisedData = useFetchLocaliseData(benefitPageData); // merge this logic with customHints? TODO
    const customHints = useFetchCustomBenefitPageHints(benefitPageData);
    console.log("Custom ID:", id.split(":")[1]);
    const xml = useFetchData(`assets/data/xml/${id.split(":")[1]}.xml`);
    const targetClass = useFetchTargetClass(id);

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

    useEffect(() => {
        async function fetchEvalGraph() {
            const violations = await matchingEngineManager.fetchWrittenViolations(matchingGraph)
            setViolations(violations);
        }
        if (validatedStatus && matchingGraph && featureFlags.writtenViolations) {
            fetchEvalGraph();
        }
    }, [validatedStatus, matchingGraph]);


    return (
        <BenefitPageScreen
            t={t}
            id={id}
            isDesktop={isDesktop}
            benefitPageData={benefitPageData}
            localisedData={localisedData}
            customHints={customHints}
            xml={xml}
            validatedStatus={validatedStatus}
            validationResult={validationResult}
            targetClass={targetClass}
            categoryTitles={categoryTitles}
            matchingGraph={matchingGraph}
            violations={violations}
        />
    );
};

export default BenefitPageScreenContainer;
