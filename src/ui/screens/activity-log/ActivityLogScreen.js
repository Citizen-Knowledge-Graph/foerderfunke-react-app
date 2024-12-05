import React from "react";
import Layout from "../../shared-components/Layout";
import ActivityLogMilestones from "./sections/milestones/ActivityLogMilestones";
import ActivityLogCommits from "./sections/commithistory/ActivityLogCommits";

const ActivityLogScreen = () => {

    return (
        <Layout>
            <ActivityLogMilestones/>
            <ActivityLogCommits/>
        </Layout>
    );
}

export default ActivityLogScreen;
