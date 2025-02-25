import React from "react";
import { Typography } from "@mui/material";
import EmailLink from "../../../../../shared-components/EmailLink";
import LinkedInLink from "../../../../../shared-components/LinkedInLink";
import { VBox, HBox } from "../../../../../shared-components/LayoutBoxes";
import theme from "../../../../../../theme";

const LandingPageMemberCard = ({ imageUrl, name, position, email, linkedin }) => {
    return (
        <VBox sx={{
            flex: 1,
            gap: theme.spacing(6),

        }}>
            <HBox justifyContent={'center'}>
                <HBox justifyContent={'center'} sx={{ width: '300px', height: '300px', overflow: 'hidden' }}>
                    <img src={imageUrl} alt="Landing Page"
                        style={{ width: "100%", height: "auto", borderRadius: "50%" }} />
                </HBox>
            </HBox>
            <VBox gap={1} alignItems={'center'}>
                <Typography variant="h4" sx={{ color: theme.palette.pink.main }}>
                    {name}
                </Typography>
                <Typography variant="body1">
                    {position}
                </Typography>
            </VBox>
            <VBox gap={1} alignItems={'center'}>
                <EmailLink email={email} />
                <LinkedInLink linkedin={linkedin} />
            </VBox>
        </VBox>)
}

export default LandingPageMemberCard;
