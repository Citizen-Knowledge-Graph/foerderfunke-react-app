import React from 'react';
import EligibilityOverviewHeader from "./components/EligibilityOverviewHeader";
import Layout from "../../components/Layout";
import EligibilityOverviewList from "./components/EligibilityOverviewList";

const EligibilityOverviewScreen = () => {
    return (
        <Layout>
            <EligibilityOverviewHeader/>
            <EligibilityOverviewList eligble={'eligible'} />
            <EligibilityOverviewList eligble={'non-eligible'} />
            <EligibilityOverviewList eligble={'indeterminate'} />
        </Layout>
    );
};

export default EligibilityOverviewScreen;

