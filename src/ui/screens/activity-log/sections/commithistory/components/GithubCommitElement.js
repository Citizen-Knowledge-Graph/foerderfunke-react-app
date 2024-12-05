import React from "react";
import { Box, Typography, Link } from "@mui/material";
import GitHubIcon from "@mui/icons-material/GitHub";
import useTranslation from "../../../../../language/useTranslation";

const GithubCommitElement = ({ commit }) => {
    const { t } = useTranslation();

    const mapDate = (date) => {
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

    return (
        <Box
            sx={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "flex-start",
                paddingBottom: 1,
                paddingTop: 1,
                borderBottom: "1px solid",
                borderColor: "divider",
                "&:last-child": {
                    borderBottom: "none",
                },
            }}
        >
            <Box
                sx={{
                    display: "flex",
                    flexDirection: "column",
                    gap: 1,
                    alignItems: "flex-start",
                }}
            >
                <Typography variant="body1">{commit.commit_message}</Typography>
                <Typography
                    variant="body2"
                    sx={{
                        fontWeight: 300,
                        color: "text.secondary",
                    }}
                >
                    {commit.repo_name}
                </Typography>
            </Box>
            <Box
                sx={{
                    display: "flex",
                    flexDirection: "column",
                    gap: 1,
                    alignItems: "flex-end",
                    minWidth: "90px",
                }}
            >
                <Typography
                    variant="caption"
                    sx={{
                        color: "text.secondary",
                        textAlign: "right",
                    }}
                >
                    {mapDate(commit.timestamp)}
                </Typography>
                <Link href={commit.commit_url} target="_blank" rel="noopener noreferrer">
                    <GitHubIcon sx={{ fontSize: 24, color: "text.primary" }} />
                </Link>
            </Box>
        </Box>
    );
};

export default GithubCommitElement;
