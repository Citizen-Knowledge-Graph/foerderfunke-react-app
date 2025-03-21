import React from "react";
import { Typography, Button } from "@mui/material";
import { Link } from "react-router-dom";
import LandingPageSectionWrapper from "../../components/LandingPageSectionWrapper";
import useTranslation from "../../../../language/useTranslation";
import { HBox, VBox } from "../../../../shared-components/LayoutBoxes";
import theme from "../../../../../theme";

const LandingPageFact = ({ isDesktop }) => {
    const { t } = useTranslation();

    return (
        <LandingPageSectionWrapper isDesktop={isDesktop}>
            <VBox sx={{
                paddingTop: isDesktop ? '104px' : '32px',
                paddingBottom: isDesktop ? '104px' : '32px',
                paddingLeft: isDesktop ? '96px' : '32px',
                paddingRight: isDesktop ? '96px' : '32px',
                backgroundColor: `${theme.palette.white.dark}40`,
                borderRadius: theme.shape.borderRadius,
            }}>
                <VBox sx={{
                    gap: theme.spacing(6), alignItems: isDesktop ? 'center' : 'flex-start'
                }}>
                    <VBox
                        sx={{
                            maxWidth: '620px',
                            alignItems: 'center',
                            gap: theme.spacing(4),
                        }}
                    >
                        <VBox sx={{ alignItems: isDesktop ? 'center' : 'flex-start' }}>
                            <Typography variant="h1" sx={{ color: theme.palette.pink.main }}>15.000.000.000 €</Typography>
                            <Typography variant="h4" sx={{
                                color: theme.palette.black.main,
                                textAlign: isDesktop ? 'center' : 'left',
                                fontWeight: '400',
                                maxWidth: '400px',
                            }}>{t('home.fact.subHeader')}</Typography>
                        </VBox>
                        <HBox>
                            <Typography variant="body1" sx={{ textAlign: isDesktop ? 'center' : 'left', }} >{t('home.fact.text')}</Typography>
                        </HBox>
                    </VBox>
                    <HBox sx={{ gap: theme.spacing(2) }}>
                        <Button 
                            variant="contained"
                            sx={{
                                '&:hover': {
                                    backgroundColor: theme.palette.yellow.main,
                                    color: theme.palette.black.main,
                                    borderColor: theme.palette.yellow.main
                                }
                            }}
                            component={Link}
                            to="/user-routing">{t('home.global.actionButton')}
                        </Button>
                    </HBox>
                </VBox>
            </VBox>
        </LandingPageSectionWrapper>
    )
}

export default LandingPageFact;
