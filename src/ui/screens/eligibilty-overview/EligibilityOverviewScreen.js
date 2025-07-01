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
    filterSet,
    filters,
    setFilters,
}) => {

    return (
        <Layout isApp={true} logo={true}>
            <AppScreenWrapperContainer back={true}>
                <VBox sx={{ gap: { xs: 4, md: 8 } }} >
                    <EligibilityOverviewHeader iconPaths={iconPaths} />
                    <VBox sx={{gap: { xs: 2, md: 4 } }}>
                        <EligibilityOverviewFilter filterSet={filterSet} setFilters={setFilters} />
                        {
                            eligibilityData ? (
                                <>
                                    {
                                        eligibilityData["social_benefit"] && (
                                            <EligibilityOverviewSection
                                                iconPaths={iconPaths}
                                                color={'yellow.main'}
                                                category={t('app.topicSelection.socialBenefitsTitle')}
                                                eligibilitySection={eligibilityData["social_benefit"]}
                                                filters={filters}
                                            />
                                        )
                                    }
                                    {
                                        eligibilityData["business"] && (
                                            <EligibilityOverviewSection
                                                iconPaths={iconPaths}
                                                color={'custom.colorDeepTealTransparent'}
                                                category={t('app.topicSelection.businessTitle')}
                                                eligibilitySection={eligibilityData["business"]}
                                                filters={filters}
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

