import React, { useContext } from 'react';
import EligibilityOverviewHeader from "./components/EligibilityOverviewHeader";
import Layout from "../../shared-components/Layout";
import AppScreenWrapper from "../../shared-components/AppScreenWrapper";
import { CircularProgress } from "@mui/material";
import { LanguageContext } from "../../language/LanguageContext";
import { useValidationReportStore } from "../../storage/zustand";
import { useValidationUpdate } from "../../storage/updates";
import useFetchData from "../../shared-hooks/useFetchData";
import { VBox } from '../../shared-components/LayoutBoxes';
import useEligibilityData from "./hooks/useEligibilityData";
import EligibilityOverviewSection from "./components/EligibilityOverviewSection";
import useTranslation from "../../language/useTranslation";
import theme from '../../../theme';
import { useStore } from "../../shared-components/ViewportUpdater";

const EligibilityOverviewScreen = () => {
    const { t } = useTranslation();
    const { language } = useContext(LanguageContext);
    const isDesktop = useStore((state) => state.isDesktop);

    const validationReport = useValidationReportStore((state) => state.validationReport);
    const validationIsLoading = useValidationUpdate((state) => state.validationIsLoading);
    const hydrationData = useFetchData('assets/data/requirement-profiles/requirement-profiles-hydration.json')
    const eligibilityData = useEligibilityData(validationReport, hydrationData, language);

    const gap = isDesktop ? theme.spacing(8) : theme.spacing(4);

    return (
        <Layout isApp={true} logo={true}>
            <AppScreenWrapper back={true}>
                <VBox sx={{ gap: gap }} >
                    <EligibilityOverviewHeader isDesktop={isDesktop} />
                    {
                        eligibilityData && !validationIsLoading ? (
                            <>
                                {
                                    eligibilityData["social_benefit"] && (
                                        <EligibilityOverviewSection
                                            color={theme.palette.yellow.main}
                                            category={t('app.topicSelection.socialBenefitsTitle')}
                                            eligibilitySection={eligibilityData["social_benefit"]}
                                        />
                                    )
                                }
                                {
                                    eligibilityData["business"] && (
                                        <EligibilityOverviewSection
                                            color={theme.palette.custom.colorDeepTealTransparent}
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

