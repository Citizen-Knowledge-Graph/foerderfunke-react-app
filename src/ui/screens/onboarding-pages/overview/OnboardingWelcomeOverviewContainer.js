import React from 'react';
import { useParams } from "react-router-dom";
import useTranslation from "@/ui/language/useTranslation";
import { useMetadataStore, useSelectedBenefitStore, useSelectedTopicsStore } from "@/ui/storage/zustand";
import { useLanguageStore } from "@/ui/storage/useLanguageStore";
import OnboardingWelcomeOverview from './OnboardingWelcomeOverview';
import useBuildTopicsList from "../hooks/useBuildTopicsList";
import useBuildBenefitTitle from "../hooks/useBuildBenefitTitle";

const OnboardingWelcomeOverviewContainer = () => {
    const { benefitMode } = useParams();
    const { t } = useTranslation();
    const language = useLanguageStore((state) => state.language);

    const selectedBenefit = useSelectedBenefitStore((state) => state.selectedBenefit);
    const selectedTopics = useSelectedTopicsStore((state) => state.selectedTopics);
    const metadata = useMetadataStore((state) => state.metadata);
    const topicWithBenefits = useBuildTopicsList(selectedTopics, metadata);
    const benefitTitle = useBuildBenefitTitle(selectedBenefit, metadata);

    return (
        <OnboardingWelcomeOverview
            t={t}
            benefitMode={benefitMode}
            language={language}
            selectedTopics={selectedTopics}
            numberOfBenefits={topicWithBenefits?.uniqueRpCount}
            benefitTitle={benefitTitle}
            topicRps={topicWithBenefits?.topicRps}
        />
    );
};

export default OnboardingWelcomeOverviewContainer;
