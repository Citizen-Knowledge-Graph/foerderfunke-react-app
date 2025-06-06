import React from "react";
import LandingPageSectionWrapper from "../../components/LandingPageSectionWrapper";
import { VBox, HBox } from "@/ui/shared-components/LayoutBoxes";
import { Typography } from "@mui/material";
import theme from "@/theme";
import { SupporterCardNGI, SupporterCardPF } from "./components/LandingPageSupporters";
import useTranslation from "@/ui/language/useTranslation";
import RegularButton from "@/ui/shared-components/buttons/RegularButton";

const LandingPageFunding = ({ isDesktop }) => {
    const { t } = useTranslation();

    return (
        <LandingPageSectionWrapper isDesktop={isDesktop}>
            <VBox sx={{ alignItems: 'center' }}>
                <VBox sx={{
                    maxWidth: "1118px",
                    alignItems: isDesktop ? 'flex-start' : 'center',
                    gap: 10,
                }}>
                    <Typography variant="h1">
                        {t('home.supportedBy.header')}
                    </Typography>
                    {
                        isDesktop ? (
                            <HBox sx={{ gap: theme.spacing(4) }}>
                                <SupporterCardNGI isDesktop={isDesktop} />
                                <SupporterCardPF isDesktop={isDesktop} />
                            </HBox>
                        ) : (
                            <VBox sx={{ gap: theme.spacing(4) }}>
                                <SupporterCardNGI isDesktop={isDesktop} />
                                <SupporterCardPF isDesktop={isDesktop} />
                            </VBox>
                        )
                    }
                    <HBox sx={{ justifyContent: 'center', width: '100%' }}>
                        <RegularButton variant="yellowContained" link={'/user-routing'} />
                    </HBox>
                </VBox>
            </VBox>
        </LandingPageSectionWrapper>
    );
}

export default LandingPageFunding;
