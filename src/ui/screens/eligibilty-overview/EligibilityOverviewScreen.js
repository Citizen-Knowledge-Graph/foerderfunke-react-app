import React, {useContext, useEffect, useState} from 'react';
import EligibilityOverviewHeader from "./components/EligibilityOverviewHeader";
import Layout from "../../shared-components/Layout";
import EligibilityOverviewList from "./components/EligibilityOverviewList";
import AppScreenWrapper from "../../shared-components/AppScreenWrapper";
import {useStore} from "../../shared-components/ViewportUpdater";
import Divider from "@mui/material/Divider";
import {buildEligibilityReports} from "../../../core/utilities/buildEligibilityReports";
import {CircularProgress} from "@mui/material";
import VStack from "../../shared-components/VStack";
import {LanguageContext} from "../../language/LanguageContext";
import {useValidationReportStore} from "../../storage/zustand";
import useSetDataObject from "../../shared-hooks/useSetDataObject";
import {useValidationUpdate} from "../../storage/updates";

const EligibilityOverviewScreen = () => {
    const { language } = useContext(LanguageContext);
    const isDesktop = useStore((state) => state.isDesktop);

    const [eligibilityData, setEligibilityData] = useState();
    const [hydrationData, setHydrationData] = useState();
    const validationReport = useValidationReportStore((state) => state.validationReport);
    const validationIsLoading = useValidationUpdate((state) => state.validationIsLoading);

    useSetDataObject('assets/data/requirement-profiles/requirement-profiles-hydration.json', setHydrationData);

    useEffect(() => {
        if (validationReport && hydrationData) {
            setEligibilityData(buildEligibilityReports(validationReport, hydrationData, language));
        }
    }, [validationReport, hydrationData, language]);

    return (
        <Layout isApp={true} logo={true}>
            <AppScreenWrapper isDesktop={isDesktop}>
                <EligibilityOverviewHeader isDesktop={isDesktop}/>
                <Divider sx={{width: "100%"}}/>
                {
                    eligibilityData && !validationIsLoading ? (
                        <>
                            {eligibilityData.eligible.length > 0 &&
                                <EligibilityOverviewList items={eligibilityData.eligible} eligible={'eligible'}/>}
                            {eligibilityData.missingData.length > 0 &&
                                <EligibilityOverviewList items={eligibilityData.missingData}
                                                         eligible={'indeterminate'}/>}
                            {eligibilityData.nonEligible.length > 0 &&
                                <EligibilityOverviewList items={eligibilityData.nonEligible}
                                                         eligible={'non-eligible'}/>}
                        </>
                    ) :
                        <>
                            <br/><br/>
                            <VStack alignItems={'center'}><CircularProgress/></VStack>
                        </>
                }
            </AppScreenWrapper>
        </Layout>
    );
};

export default EligibilityOverviewScreen;

