import React from "react";
import { Typography, Box } from "@mui/material";
import LandingPageSectionWrapper from "../../landing-page/components/LandingPageSectionWrapper";
import LandingPageSectionGrid from "../../landing-page/components/LandingPageSectionGrid";

const ActivityLogSection = ({ title, description, content, error }) => {
    return (
        <LandingPageSectionWrapper>
            <LandingPageSectionGrid title={title}>
                <Box>
                    <Typography variant="body1">{description}</Typography>
                </Box>
                <Box sx={{ width: "100%" }}>
                    {content}
                    {error && (
                        <Typography color="error" sx={{ marginTop: 2 }}>
                            {error}
                        </Typography>
                    )}
                </Box>
            </LandingPageSectionGrid>
        </LandingPageSectionWrapper>
    );
};

export default ActivityLogSection;
