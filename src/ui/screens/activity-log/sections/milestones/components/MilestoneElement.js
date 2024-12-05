import React from "react";
import { Box, IconButton, Typography, useTheme } from "@mui/material";
import OpenInNewIcon from "@mui/icons-material/OpenInNew";

const MilestoneElement = ({ milestone }) => {
    const theme = useTheme();

    return (
        <Box
            sx={{
                display: "flex",
                flexDirection: "column",
                gap: theme.spacing(2),
                paddingBottom: theme.spacing(2),
                paddingTop: theme.spacing(2),
                borderBottom: `1px solid ${theme.palette.primary.main}`,
                "&:last-child": {
                    borderBottom: "none",
                },
            }}
        >
            <Box
                sx={{
                    display: "flex",
                    justifyContent: "space-between",
                }}
            >
                <Typography variant='h6'>
                    {milestone.title}
                </Typography>
                <Typography variant='body2'
                    sx={{
                        fontWeight: theme.typography.fontWeightLight,
                        color: theme.palette.custom.darkGrey,
                    }}
                >
                    {milestone.date}
                </Typography>
            </Box>
            <Box
                sx={{
                    display: "flex",
                    flexDirection: "column",
                    gap: theme.spacing(1),
                }}
            >
                <Typography variant='body1'>{milestone.description}</Typography>
                <Box
                    sx={{
                        display: "flex",
                        flexDirection: "row",
                        gap: theme.spacing(1),
                    }}
                >
                    {milestone.links?.map((link, index) => (
                        <IconButton
                            key={index}
                            component="a"
                            href={link.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label={`Open link: ${link.title}`}
                            sx={{
                                borderRadius: theme.spacing(0.5),
                                padding: theme.spacing(0.5),
                                border: `1px solid ${theme.palette.primary.main}`,
                                "&:hover": {
                                    backgroundColor: theme.palette.primary.main,
                                },
                            }}
                        >
                            <Box
                                sx={{
                                    display: "flex",
                                    alignItems: "center",
                                    gap: theme.spacing(1),
                                }}
                            >
                                <OpenInNewIcon sx={{ fontSize: 16, color: theme.palette.text.primary }} />
                                <Typography variant='caption'>
                                    {link.title}
                                </Typography>
                            </Box>
                        </IconButton>
                    ))}
                </Box>
            </Box>
        </Box>
    );
};

export default MilestoneElement;
