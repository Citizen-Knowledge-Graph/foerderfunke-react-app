import React from "react";
import { Typography, Box } from "@mui/material";
import GithubCommitElement from "./GithubCommitElement";
import useTranslation from "../../../../../language/useTranslation";

const GithubCommitsList = ({ commits }) => {
    const { t } = useTranslation();

    return (
        <Box sx={{ width: "100%" }}>
            <Box
                sx={{
                    display: "flex",
                    justifyContent: "flex-end",
                    borderBottom: "2px solid",
                    borderColor: "divider",
                    marginBottom: 1,
                }}
            >
                <Typography variant="h6">{t("activityLog.gitCommits.listTitle")}</Typography>
            </Box>
            <Box
                sx={{
                    display: "flex",
                    flexDirection: "column",
                    "& > *:not(:last-child)": {
                        borderBottom: "1px solid",
                        borderColor: "divider",
                    },
                }}
            >
                {commits.map((item) => (
                    <GithubCommitElement key={item.sha || item.id} commit={item} />
                ))}
            </Box>
        </Box>
    );
};

export default GithubCommitsList;
