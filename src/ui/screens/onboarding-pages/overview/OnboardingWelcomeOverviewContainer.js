import React from 'react';
import useTranslation from "@/ui/language/useTranslation";
import { useMetadataStore, useSelectedBenefitsStore, useSelectedTopicsStore } from "@/ui/storage/zustand";
import { useLanguageStore } from "@/ui/storage/useLanguageStore";
import OnboardingWelcomeOverview from './OnboardingWelcomeOverview';
import useBuildTopicsList from "../hooks/useBuildTopicsList";
import useBuildBenefitsTitles from "../hooks/useBuildBenefitsTitles";

const OnboardingWelcomeOverviewContainer = () => {
    const { t } = useTranslation();
    const language = useLanguageStore((state) => state.language);

    const selectedBenefits = useSelectedBenefitsStore((state) => state.selectedBenefits);
    const selectedTopics = useSelectedTopicsStore((state) => state.selectedTopics);
    const metadata = useMetadataStore((state) => state.metadata);
    const topicWithBenefits = useBuildTopicsList(selectedTopics, metadata);
    const benefitTitles = useBuildBenefitsTitles(selectedBenefits, metadata);

    return (
        <OnboardingWelcomeOverview
            t={t}
            language={language}
            selectedTopics={selectedTopics}
            numberOfBenefits={topicWithBenefits?.uniqueRpCount}
            benefitTitles={benefitTitles}
            topicRps={topicWithBenefits?.topicRps}
        />
    );
};

export default OnboardingWelcomeOverviewContainer;
