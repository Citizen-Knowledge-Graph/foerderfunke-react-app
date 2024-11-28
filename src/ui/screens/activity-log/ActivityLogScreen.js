import React from "react";
import Layout from "../../shared-components/Layout";
import {useStore} from "../../shared-components/ViewportUpdater";
import ActivityLogMilestones from "./sections/milestones/ActivityLogMilestones";
import ActivityLogCommits from "./sections/commithistory/ActivityLogCommits";
import VStack from "../../shared-components/VStack";

const ActivityLogScreen = () => {
    const isDesktop = useStore((state) => state.isDesktop);

    return (
        <Layout>
            <VStack gap={3}>
                <ActivityLogMilestones isDesktop={isDesktop}/>
                <ActivityLogCommits isDesktop={isDesktop}/>
            </VStack>
        </Layout>
    );
}

export default ActivityLogScreen;
