import React, { useContext } from 'react';
import EligibilityOverviewHeader from "./components/EligibilityOverviewHeader";
import Layout from "../../shared-components/Layout";
import EligibilityOverviewList from "./components/EligibilityOverviewList";
import AppScreenWrapper from "../../shared-components/AppScreenWrapper";
import { useStore } from "../../shared-components/ViewportUpdater";
import Divider from "@mui/material/Divider";
import { CircularProgress } from "@mui/material";
import { LanguageContext } from "../../language/LanguageContext";
import { useValidationReportStore } from "../../storage/zustand";
import { useValidationUpdate } from "../../storage/updates";
import useFetchData from "../../shared-hooks/useFetchData";
import { VBox } from '../../shared-components/LayoutBoxes';
import useEligibilityData from "./hooks/useEligibilityData";

const EligibilityOverviewScreen = () => {
    const { language } = useContext(LanguageContext);
    const isDesktop = useStore((state) => state.isDesktop);

    const validationReport = useValidationReportStore((state) => state.validationReport);
    const validationIsLoading = useValidationUpdate((state) => state.validationIsLoading);
    const hydrationData = useFetchData('assets/data/requirement-profiles/requirement-profiles-hydration.json')
    const eligibilityData = useEligibilityData(validationReport, hydrationData, language);

    return (
        <Layout isApp={true} logo={true}>
            <AppScreenWrapper isDesktop={isDesktop}>
                <EligibilityOverviewHeader/>
                <Divider sx={{ width: "100%" }} />
                {
                    eligibilityData && !validationIsLoading ? (
                        <>
                            {eligibilityData.eligible.length > 0 &&
                                <EligibilityOverviewList items={eligibilityData.eligible} eligible={'eligible'} />}
                            {eligibilityData.missingData.length > 0 &&
                                <EligibilityOverviewList items={eligibilityData.missingData}
                                    eligible={'indeterminate'} />}
                            {eligibilityData.nonEligible.length > 0 &&
                                <EligibilityOverviewList items={eligibilityData.nonEligible}
                                    eligible={'non-eligible'} />}
                        </>
                    ) :
                        <VBox sx={{ alignItems: "center" }}><CircularProgress /></VBox>
                }
            </AppScreenWrapper>
        </Layout>
    );
};

export default EligibilityOverviewScreen;

