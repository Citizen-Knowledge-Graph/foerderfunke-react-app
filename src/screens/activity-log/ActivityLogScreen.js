import React from "react";
import Layout from "../../components/Layout";
import {useStore} from "../../components/ViewportUpdater";
import ActivityLogMilestones from "./sections/milestones/ActivityLogMilestones";
import ActivityLogCommits from "./sections/commithistory/ActivityLogCommits";

const ActivityLogScreen = () => {
    const isDesktop = useStore((state) => state.isDesktop);

    return (
        <Layout>
            <ActivityLogMilestones isDesktop={isDesktop}/>
            <ActivityLogCommits isDesktop={isDesktop}/>
        </Layout>
    );
}

export default ActivityLogScreen;
