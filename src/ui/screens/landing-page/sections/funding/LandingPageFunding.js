import React from "react";
import LandingPageSectionWrapper from "../../components/LandingPageSectionWrapper";
import { VBox, HBox } from "../../../../shared-components/LayoutBoxes";
import { Typography } from "@mui/material";
import theme from "../../../../../theme";
import { SupporterCardNGI, SupporterCardPF } from "./components/LandingPageSupporters";

const LandingPageFunding = ({ isDesktop }) => {

    return (
        <LandingPageSectionWrapper isDesktop={isDesktop}>
            <VBox sx={{
                alignItems: 'center',
            }}>
                <VBox sx={{
                    maxWidth: "1118px",
                    alignItems: 'flex-start',
                    gap: theme.spacing(10),
                }}>
                    <Typography variant="h1">
                        Unsere Unterstützung
                    </Typography>
                    <HBox sx={{ gap: theme.spacing(4) }}>
                        <SupporterCardNGI />
                        <SupporterCardPF />
                    </HBox>
                </VBox>
            </VBox>
        </LandingPageSectionWrapper>
    );
}

export default LandingPageFunding;
