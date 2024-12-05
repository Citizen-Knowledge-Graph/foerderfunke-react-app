import React from "react";
import { Typography, Box } from "@mui/material";
import MilestoneElement from "./MilestoneElement";

const MilestonesList = ({ title, milestones }) => {
    return (
        <Box sx={{ width: "100%" }}>
            <Box
                sx={{
                    width: "100%",
                    borderBottom: `2px solid`,
                    borderColor: "divider",
                    display: "flex",
                    justifyContent: "flex-end",
                    paddingBottom: 1,
                }}
            >
                <Typography variant="h4">
                    {title}
                </Typography>
            </Box>
            <Box
                sx={{
                    display: "flex",
                    flexDirection: "column",
                    "& > *:not(:last-child)": {
                        borderBottom: `1px solid`,
                        borderColor: "divider",
                    },
                }}
            >
                {milestones.map((item) => (
                    <MilestoneElement key={item.id || item.title} milestone={item} />
                ))}
            </Box>
        </Box>
    );
};

export default MilestonesList;
