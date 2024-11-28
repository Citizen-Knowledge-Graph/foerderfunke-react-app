import React, {useContext, useEffect, useState} from 'react';
import EligibilityOverviewHeader from "./components/EligibilityOverviewHeader";
import Layout from "../../shared-components/Layout";
import EligibilityOverviewList from "./components/EligibilityOverviewList";
import {useFetchHydrationData} from "./hooks/useFetchHydrationData";
import AppScreenWrapper from "../../shared-components/AppScreenWrapper";
import {useStore} from "../../shared-components/ViewportUpdater";
import Divider from "@mui/material/Divider";
import validationManager from "../../../core/managers/validationManager";
import {buildEligibilityReports} from "../../../core/utilities/buildEligibilityReports";
import {CircularProgress} from "@mui/material";
import VStack from "../../shared-components/VStack";
import {LanguageContext} from "../../language/LanguageContext";

const EligibilityOverviewScreen = () => {
    const { language } = useContext(LanguageContext);

    const isDesktop = useStore((state) => state.isDesktop);
    const [eligibilityData, setEligibilityData] = useState();
    const hydrationData = useFetchHydrationData();
    const [hasRerunValidation, setHasRerunValidation] = useState(false);

    useEffect(() => {
        const rerunValidation = async () => {
            const validationReport = await validationManager.runValidation("ff:quick-check-user", language);
            setEligibilityData(buildEligibilityReports(validationReport, hydrationData, language));
        }
        if (hydrationData && !hasRerunValidation) {
            setHasRerunValidation(true);
            rerunValidation();
        }
    }, [hasRerunValidation, hydrationData, language]);

    return (
        <Layout isApp={true} logo={true}>
            <AppScreenWrapper isDesktop={isDesktop}>
                <EligibilityOverviewHeader isDesktop={isDesktop}/>
                <Divider sx={{width: "100%"}}/>
                {
                    eligibilityData ? (
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
