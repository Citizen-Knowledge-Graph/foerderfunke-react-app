import React from 'react';
import EligibilityOverviewHeader from "./components/EligibilityOverviewHeader";
import Layout from "../../components/Layout";
import EligibilityOverviewList from "./components/EligibilityOverviewList";

const EligibilityOverviewScreen = () => {
    return (
        <Layout>
            <EligibilityOverviewHeader/>
            <EligibilityOverviewList/>
        </Layout>
    );
};

export default EligibilityOverviewScreen;

