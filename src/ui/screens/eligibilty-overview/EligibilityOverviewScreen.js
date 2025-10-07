import React from 'react';
import { CircularProgress } from "@mui/material";
import Layout from "@/ui/shared-components/Layout";
import AppScreenWrapperContainer from "@/ui/shared-components/app-screen-wrapper/AppScreenWrapperContainer";
import { VBox } from '@/ui/shared-components/LayoutBoxes';
import EligibilityOverviewHeader from "./components/EligibilityOverviewHeader";
import EligibilityOverviewSection from "./components/EligibilityOverviewSection";
import EligibilityOverviewFilter from './components/EligibilityOverviewFilter';
import RegularButton from "@/ui/shared-components/buttons/RegularButton";
import featureFlags from "@/featureFlags";
import { useSelectedBenefitsStore } from "@/ui/storage/zustand";
import EastIcon from '@mui/icons-material/East';

const EligibilityOverviewScreen = ({
    t,
    eligibilityData,
    isDesktop,
    filterOptions,
    filters,
    onChangeFilters,
}) => {
    const setSelectedBenefits = useSelectedBenefitsStore((state) => state.setSelectedBenefits);

    const atLeastOneWithMissingData = () => {
        return eligibilityData.business?.['ff:missingData']?.length > 0 ||
            eligibilityData.social_benefit?.['ff:missingData']?.length > 0;
    };

    const doSetSelectedBenefits = () => {
        const ids = [];
        const collect = (section) => {
            if (!section?.['ff:missingData']) return;
            section['ff:missingData'].forEach(item => ids.push(item.uri));
        };
        collect(eligibilityData.social_benefit);
        collect(eligibilityData.business);
        setSelectedBenefits(ids);
    };

    return (
        <Layout isApp={true} logo={true}>
            <AppScreenWrapperContainer back={true}>
                <VBox sx={{ gap: { xs: 4, md: 8 } }} >
                    <EligibilityOverviewHeader />
                    <VBox sx={{ gap: { xs: 2, md: 4 } }}>
                        <EligibilityOverviewFilter
                            t={t}
                            isDesktop={isDesktop}
                            filterOptions={filterOptions}
                            filters={filters}
                            onChangeFilters={onChangeFilters}
                        />
                        {featureFlags.bielefunke && atLeastOneWithMissingData() &&
                            <RegularButton
                                text={"Noch offene Ansprüche prüfen"}
                                variant={'blueContained'}
                                link='/onboarding-welcome'
                                onClick={doSetSelectedBenefits}
                                endIcon={<EastIcon/>}
                            />
                        }
                        {
                            eligibilityData ? (
                                <>
                                    {
                                        eligibilityData["social_benefit"] && (
                                            <EligibilityOverviewSection
                                                t={t}
                                                isDesktop={isDesktop}
                                                category={t('app.topicSelection.socialBenefitsTitle')}
                                                eligibilitySection={eligibilityData["social_benefit"]}
                                            />
                                        )
                                    }
                                    {
                                        eligibilityData["business"] && (
                                            <EligibilityOverviewSection
                                                t={t}
                                                isDesktop={isDesktop}
                                                category={t('app.topicSelection.businessTitle')}
                                                eligibilitySection={eligibilityData["business"]}
                                            />
                                        )
                                    }
                                </>
                            ) :
                                <VBox sx={{ alignItems: "center" }}><CircularProgress /></VBox>
                        }
                    </VBox>
                </VBox>
            </AppScreenWrapperContainer>
        </Layout >
    );
};

export default EligibilityOverviewScreen;
