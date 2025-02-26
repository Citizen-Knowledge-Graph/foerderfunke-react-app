import React from "react";
import LandingPageSectionWrapper from "../../components/LandingPageSectionWrapper";
import { VBox, HBox } from "../../../../shared-components/LayoutBoxes";
import { Typography, Button } from "@mui/material";
import theme from "../../../../../theme";
import { SupporterCardNGI, SupporterCardPF } from "./components/LandingPageSupporters";
import { Link } from "react-router-dom";
import useTranslation from "../../../../language/useTranslation";

const LandingPageFunding = ({ isDesktop }) => {
    const { t } = useTranslation();

    return (
        <LandingPageSectionWrapper isDesktop={isDesktop}>
            <VBox sx={{
                alignItems: 'center',
            }}>
                <VBox sx={{
                    maxWidth: "1118px",
                    alignItems: isDesktop ? 'flex-start' : 'center',
                    gap: theme.spacing(10),
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

                    <HBox sx={{ width: "100%", justifyContent: 'center' }}>
                        <Button variant="contained"
                            sx={{
                                backgroundColor: theme.palette.yellow.main,
                                color: theme.palette.black.main,
                                borderColor: theme.palette.yellow.main,
                                '&:hover': {
                                    backgroundColor: theme.palette.blue.dark,
                                    color: theme.palette.white.main,
                                    borderColor: theme.palette.blue.dark
                                }
                            }}
                            component={Link}
                            to="/user-routing">{t('home.global.actionButton')}
                        </Button>
                    </HBox>
                </VBox>
            </VBox>
        </LandingPageSectionWrapper>
    );
}

export default LandingPageFunding;
