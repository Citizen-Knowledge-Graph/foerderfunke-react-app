import React from "react";
import { Box, Typography, Link } from "@mui/material";
import GitHubIcon from "@mui/icons-material/GitHub";
import {mapDate} from "../../../../../utils/dateUtils";
import useTranslation from "../../../../../language/useTranslation";

const GithubCommitElement = ({ commit }) => {
    const { t } = useTranslation();

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
                    {mapDate(commit.timestamp, t)}
                </Typography>
                <Link href={commit.commit_url} target="_blank" rel="noopener noreferrer">
                    <GitHubIcon sx={{ fontSize: 24, color: "text.primary" }} />
                </Link>
            </Box>
        </Box>
    );
};

export default GithubCommitElement;
