import React from "react";
import { Typography } from "@mui/material";
import LandingPageSectionWrapper from "../../components/LandingPageSectionWrapper";
import useTranslation from "../../../../language/useTranslation";
import { HBox, VBox } from "../../../../shared-components/LayoutBoxes";
import theme from "../../../../../theme";

const LandingPageFact = ({ isDesktop }) => {
    const { t } = useTranslation();

    return (
        <LandingPageSectionWrapper isDesktop={isDesktop}>
            <VBox sx={{
                paddingTop: '104px',
                paddingBottom: '104px',
                backgroundColor: `${theme.palette.white.dark}40`,
                borderRadius: theme.shape.borderRadius,
                alignItems: 'center',
            }}>
                <VBox
                    sx={{
                        maxWidth: '620px',
                        alignItems: 'center',
                        gap: theme.spacing(4),
                    }}
                >
                    <VBox sx={{alignItems: 'center'}}>
                        <Typography variant="h1" sx={{color: theme.palette.pink.main}}>15.000.000.000 Euro</Typography>
                        <Typography variant="h4" sx={{
                            color: theme.palette.black.main, 
                            textAlign: 'center', 
                            fontWeight: '400',
                            maxWidth: '400px',
                        }}>{t('home.mission.subHeader')}</Typography>
                    </VBox>
                    <HBox>
                        <Typography variant="body1" sx={{textAlign: 'center'}} >{t('home.mission.text')}</Typography>
                    </HBox>
                </VBox>
            </VBox>
        </LandingPageSectionWrapper>
    )
}

export default LandingPageFact;
