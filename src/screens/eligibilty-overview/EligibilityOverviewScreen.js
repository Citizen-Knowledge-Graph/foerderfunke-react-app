import React, {useEffect, useState} from 'react';
import EligibilityOverviewHeader from "./components/EligibilityOverviewHeader";
import Layout from "../../components/Layout";
import EligibilityOverviewList from "./components/EligibilityOverviewList";
import { useValidationReportStore } from '../../storage/zustand';
import {useFetchEligibilityReports} from "./hooks/useFetchEligibilityReports";
import {useFetchHydrationData} from "./hooks/useFetchHydrationData";

const EligibilityOverviewScreen = () => {
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
        <Layout>
            <EligibilityOverviewHeader/>
            {
                eligibilityData ? (
                    <>
                        <EligibilityOverviewList items={eligibilityData.eligible} eligble={'eligible'} />
                        <EligibilityOverviewList items={eligibilityData.nonEligible} eligble={'non-eligible'} />
                        <EligibilityOverviewList items={eligibilityData.missingData} eligble={'indeterminate'} />
                    </>
                ) : null
            }


        </Layout>
    );
};

export default EligibilityOverviewScreen;

