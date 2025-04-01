// Smart Component
import React, { useContext } from 'react';
import { useParams } from "react-router-dom";
import useTranslation from "@/ui/language/useTranslation";
import { LanguageContext } from "@/ui/language/LanguageContext";
import useNumberOfBenefits from "../hooks/useNumberOfBenefits";
import { useMetadataStore, useSelectedBenefitStore, useSelectedTopicsStore } from "@/ui/storage/zustand";
import { useValidationUpdate } from "@/ui/storage/updates";
import OnboardingWelcomeOverview from './OnboardingWelcomeOverview';

const OnboardingWelcomeOverviewContainer = () => {
    const { benefitMode } = useParams();
    const { t } = useTranslation();
    const { language } = useContext(LanguageContext);

    const validationIsLoading = useValidationUpdate((state) => state.validationIsLoading);
    const selectedBenefit = useSelectedBenefitStore((state) => state.selectedBenefit);
    const selectedTopics = useSelectedTopicsStore((state) => state.selectedTopics);
    const metadata = useMetadataStore((state) => state.metadata);
    const numberOfBenefits = useNumberOfBenefits(selectedTopics, metadata);

    const rpTitle = selectedBenefit
        ? metadata?.rp["https://foerderfunke.org/default#" + selectedBenefit.split(":")[1]]?.title
        : "";

    const topicRps = metadata?.rp
        ? selectedTopics.map(topic => {
            const topicUri = "https://foerderfunke.org/default#" + topic.id.split(":")[1];
            const rps = Object.values(metadata.rp).filter(rp => rp.categories.includes(topicUri));
            return { topic, rps };
        })
        : [];

    const isLoading = !metadata?.rp || validationIsLoading;

    return (
        <OnboardingWelcomeOverview
            t={t}
            benefitMode={benefitMode}
            language={language}
            validationIsLoading={validationIsLoading}
            selectedTopics={selectedTopics}
            isLoading={isLoading}
            numberOfBenefits={numberOfBenefits}
            rpTitle={rpTitle}
            topicRps={topicRps}
        />
    );
};

export default OnboardingWelcomeOverviewContainer;