import React from "react";
import ActivityLogSection from "../../components/ActivityLogSection";
import MilestonesList from "./components/MilestonesList";
import useTranslation from "../../../../language/useTranslation";
import useFetchMilestones from "./hooks/useFetchMilestones";
import {Box} from "@mui/material";

const ActivityLogMilestones = () => {
    const { t } = useTranslation();
    const { upcoming, past } = useFetchMilestones();

    return (
        <ActivityLogSection
            title={t("activityLog.milestones.title")}
            description={t("activityLog.milestones.description")}
            content={
                <Box sx={{ display: "flex", flexDirection: "column", gap: 3 }}>
                    <MilestonesList
                        title={t("activityLog.milestones.listTitleComingUp")}
                        milestones={upcoming}
                    />
                    <MilestonesList
                        title={t("activityLog.milestones.listTitlePast")}
                        milestones={past}
                    />
                </Box>
            }
        />
    );
};

export default ActivityLogMilestones;
