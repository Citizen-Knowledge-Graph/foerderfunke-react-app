import React from 'react';
import useFetchData from "@/ui/shared-hooks/useFetchData";
import useTopicSelectionHandlers from "../hooks/useTopicSelectionHandlers";
import useTranslation from "@/ui/language/useTranslation";
import OnboardingWelcomeTopics from './OnboardingWelcomeTopics';

const OnboardingWelcomeTopicsContainer = () => {
    const { t } = useTranslation();
    const topicsData = useFetchData('assets/data/topics/topics-list.json')
    const { selectedTopicsLocal, handleButtonClick, handleToggleSelectAll, persistSelectedTopics } =
        useTopicSelectionHandlers(topicsData);

    const markSelected = (topics) =>
        topics.map(topic => ({
            ...topic,
            isSelected: selectedTopicsLocal.some(sel => sel.id === topic.id)
        }));
    const socialBenefitTopics = markSelected(
        topicsData?.filter(topic => topic.category === 'social_benefits') || []
    );
    const businessTopics = markSelected(
        topicsData?.filter(topic => topic.category === 'business') || []
    );

    return (
        <OnboardingWelcomeTopics
            t={t}
            socialBenefitTopics={socialBenefitTopics}
            businessTopics={businessTopics}
            onTopicClick={handleButtonClick}
            onSelectAll={handleToggleSelectAll}
            onConfirm={persistSelectedTopics}
        />
    );
}

export default OnboardingWelcomeTopicsContainer;
