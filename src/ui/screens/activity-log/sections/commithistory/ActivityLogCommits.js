import React from "react";
import ActivityLogSection from "../../components/ActivityLogSection";
import useFetchLatestCommitsHandler from "./hooks/useFetchLatestCommitsHandler";
import GithubCommitsList from "./components/GithubCommitsList";
import useTranslation from "../../../../language/useTranslation";

const ActivityLogCommits = () => {
    const { t } = useTranslation();
    const { commits, error } = useFetchLatestCommitsHandler();

    return (
        <ActivityLogSection
            title={t("activityLog.gitCommits.title")}
            description={t("activityLog.gitCommits.description")}
            content={<GithubCommitsList commits={commits} />}
            error={error ? "Commits cannot be loaded." : null}
        />
    );
};

export default ActivityLogCommits;
