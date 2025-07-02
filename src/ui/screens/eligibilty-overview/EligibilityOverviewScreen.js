import React from 'react';
import { CircularProgress } from "@mui/material";
import Layout from "@/ui/shared-components/Layout";
import AppScreenWrapperContainer from "@/ui/shared-components/app-screen-wrapper/AppScreenWrapperContainer";
import { VBox } from '@/ui/shared-components/LayoutBoxes';
import EligibilityOverviewHeader from "./components/EligibilityOverviewHeader";
import EligibilityOverviewSection from "./components/EligibilityOverviewSection";
import EligibilityOverviewFilter from './components/EligibilityOverviewFilter';

const EligibilityOverviewScreen = ({
    t,
    iconPaths,
    eligibilityData,
    filterOptions,
    filters,
    onChangeFilters,
}) => {

    return (
        <Layout isApp={true} logo={true}>
            <AppScreenWrapperContainer back={true}>
                <VBox sx={{ gap: { xs: 4, md: 8 } }} >
                    <EligibilityOverviewHeader iconPaths={iconPaths} />
                    <VBox sx={{ gap: { xs: 2, md: 4 } }}>
                        <EligibilityOverviewFilter
                            t={t}
                            filterOptions={filterOptions}
                            filters={filters}
                            onChangeFilters={onChangeFilters}
                        />
                        {
                            eligibilityData ? (
                                <>
                                    {
                                        eligibilityData["social_benefit"] && (
                                            <EligibilityOverviewSection
                                                category={t('app.topicSelection.socialBenefitsTitle')}
                                                eligibilitySection={eligibilityData["social_benefit"]}
                                                iconPaths={iconPaths}
                                            />
                                        )
                                    }
                                    {
                                        eligibilityData["business"] && (
                                            <EligibilityOverviewSection
                                                category={t('app.topicSelection.businessTitle')}
                                                eligibilitySection={eligibilityData["business"]}
                                                iconPaths={iconPaths}
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

