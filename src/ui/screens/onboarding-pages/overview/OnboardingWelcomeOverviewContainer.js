import React, { useContext } from 'react';
import { useParams } from "react-router-dom";
import useTranslation from "@/ui/language/useTranslation";
import { LanguageContext } from "@/ui/language/LanguageContext";
import { useSelectedBenefitStore, useSelectedTopicsStore } from "@/ui/storage/zustand";
import useJointValidationStatus from "@/ui/shared-hooks/useJointValidationStatus";
import OnboardingWelcomeOverview from './OnboardingWelcomeOverview';
import useNumberOfBenefits from "../hooks/useNumberOfBenefits";
import useProduceMetadata from '../hooks/useProduceMetadata';
import useProduceOverviewTitles from "../hooks/useProduceOverviewTitles";

const OnboardingWelcomeOverviewContainer = () => {
    const { benefitMode } = useParams();
    const { t } = useTranslation();
    const { isLoadingJointStatus } = useJointValidationStatus();
    const { language } = useContext(LanguageContext);

    const selectedBenefit = useSelectedBenefitStore((state) => state.selectedBenefit);
    const selectedTopics = useSelectedTopicsStore((state) => state.selectedTopics);
    const metadata = useProduceMetadata();
    const numberOfBenefits = useNumberOfBenefits(selectedTopics, metadata);
    const { rpTitle, topicRps } = useProduceOverviewTitles(metadata, selectedTopics, selectedBenefit);
    const isLoading = !metadata?.rp || isLoadingJointStatus;

    return (
        <OnboardingWelcomeOverview
            t={t}
            benefitMode={benefitMode}
            language={language}
            selectedTopics={selectedTopics}
            isLoading={isLoading}
            numberOfBenefits={numberOfBenefits}
            rpTitle={rpTitle}
            topicRps={topicRps}
        />
    );
};

export default OnboardingWelcomeOverviewContainer;