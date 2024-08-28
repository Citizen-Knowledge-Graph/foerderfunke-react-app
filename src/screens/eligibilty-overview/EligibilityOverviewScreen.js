import React, {useEffect, useState} from 'react';
import EligibilityOverviewHeader from "./components/EligibilityOverviewHeader";
import Layout from "../../components/Layout";
import EligibilityOverviewList from "./components/EligibilityOverviewList";
import {useValidationReportStore} from '../../storage/zustand';
import {useFetchEligibilityReports} from "./hooks/useFetchEligibilityReports";
import {useFetchHydrationData} from "./hooks/useFetchHydrationData";
import EligibilityOverviewFilter from "./components/EligibilityOverviewFilter";
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
                <EligibilityOverviewHeader/>
                <Divider sx={{width: "100%"}}/>
                {
                    eligibilityData ? (
                        <>
                            <EligibilityOverviewFilter/>
                            <EligibilityOverviewList items={eligibilityData.eligible} eligible={'eligible'}/>
                            <EligibilityOverviewList items={eligibilityData.nonEligible} eligible={'non-eligible'}/>
                            <EligibilityOverviewList items={eligibilityData.missingData} eligible={'indeterminate'}/>
                        </>
                    ) : null
                }
            </AppScreenWrapper>
        </Layout>
    );
};

export default EligibilityOverviewScreen;

