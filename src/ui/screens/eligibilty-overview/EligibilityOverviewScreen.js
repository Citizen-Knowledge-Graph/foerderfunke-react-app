import React from 'react';
import { CircularProgress } from "@mui/material";
import Layout from "@/ui/shared-components/Layout";
import AppScreenWrapper from "@/ui/shared-components/AppScreenWrapper";
import { VBox } from '@/ui/shared-components/LayoutBoxes';
import EligibilityOverviewHeader from "./components/EligibilityOverviewHeader";
import EligibilityOverviewSection from "./components/EligibilityOverviewSection";


const EligibilityOverviewScreen = ({
    t,
    iconPaths,
    eligibilityData,
    validationIsLoading,
}) => {

    return (
        <Layout isApp={true} logo={true}>
            <AppScreenWrapper isLoading={validationIsLoading} back={true}>
                <VBox sx={{ gap: { xs: 4, md: 8 } }} >
                    <EligibilityOverviewHeader iconPaths={iconPaths} />
                    {
                        eligibilityData && !validationIsLoading ? (
                            <>
                                {
                                    eligibilityData["social_benefit"] && (
                                        <EligibilityOverviewSection
                                            iconPaths={iconPaths}
                                            color={'yellow.main'}
                                            category={t('app.topicSelection.socialBenefitsTitle')}
                                            eligibilitySection={eligibilityData["social_benefit"]}
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
                                        />
                                    )
                                }
                            </>
                        ) :
                            <VBox sx={{ alignItems: "center" }}><CircularProgress /></VBox>
                    }
                </VBox>
            </AppScreenWrapper>
        </Layout >
    );
};

export default EligibilityOverviewScreen;

