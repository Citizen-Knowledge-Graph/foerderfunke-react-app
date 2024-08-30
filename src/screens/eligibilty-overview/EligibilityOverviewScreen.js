import React, {useEffect, useState} from 'react';
import EligibilityOverviewHeader from "./components/EligibilityOverviewHeader";
import Layout from "../../components/Layout";
import EligibilityOverviewList from "./components/EligibilityOverviewList";
import {useValidationReportStore} from '../../storage/zustand';
import {useFetchEligibilityReports} from "./hooks/useFetchEligibilityReports";
import {useFetchHydrationData} from "./hooks/useFetchHydrationData";
import AppScreenWrapper from "../../components/AppScreenWrapper";
import {useStore} from "../../components/ViewportUpdater";
import Divider from "@mui/material/Divider";

const EligibilityOverviewScreen = () => {
    const isDesktop = useStore((state) => state.isDesktop);
    const [eligibilityData, setEligibilityData] = useState();
    const validationReport = useValidationReportStore((state) => state.validationReport);
    const hydrationData = useFetchHydrationData();
    const fetchEligibilityReports = useFetchEligibilityReports({validationReport, hydrationData});

    useEffect(() => {
        if (hydrationData) {
            setEligibilityData(fetchEligibilityReports());
        }
    }, [fetchEligibilityReports, hydrationData]);

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
                                <EligibilityOverviewList items={eligibilityData.missingData} eligible={'indeterminate'}/>}
                            {eligibilityData.nonEligible.length > 0 &&
                                <EligibilityOverviewList items={eligibilityData.nonEligible} eligible={'non-eligible'}/>}
                        </>
                    ) : null
                }
            </AppScreenWrapper>
        </Layout>
    );
};

export default EligibilityOverviewScreen;

