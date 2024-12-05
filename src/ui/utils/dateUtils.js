export const mapDate = (date, t) => {
    const dateObj = new Date(date);
    const today = new Date();

    dateObj.setHours(0, 0, 0, 0);
    today.setHours(0, 0, 0, 0);

    const diffTime = today - dateObj;
    const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24));

    if (diffDays === 0) {
        return t("activityLog.gitCommits.today");
    } else if (diffDays === 1) {
        return t("activityLog.gitCommits.yesterday");
    } else {
        return t("activityLog.gitCommits.daysAgo", { count: diffDays });
    }
};
