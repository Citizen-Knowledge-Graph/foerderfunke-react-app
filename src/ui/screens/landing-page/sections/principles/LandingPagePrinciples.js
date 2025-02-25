import React from "react";
import LandingPageSectionWrapper from "../../components/LandingPageSectionWrapper";
import useTranslation from "../../../../language/useTranslation";
import theme from "../../../../../theme";
import { HBox, VBox } from "../../../../shared-components/LayoutBoxes";
import { Typography } from "@mui/material";

const LandingPagePrinciples = ({ isDesktop }) => {
    const { t } = useTranslation();
    const locket = `${process.env.PUBLIC_URL}/assets/images/landing-page/lockets.svg`;

    return (
        <LandingPageSectionWrapper isDesktop={isDesktop}>
            <VBox sx={{
                paddingTop: '104px',
                paddingBottom: '104px',
                paddingLeft: '96px',
                paddingRight: '96px',
                alignItems: 'center',
            }}>
                <HBox sx={{ gap: theme.spacing(8) }}>
                    <VBox sx={{ maxWidth: '760px', gap: theme.spacing(6) }}>
                        <Typography variant="h1" sx={{ color: theme.palette.black.main }}>
                            Und so funktioniert's
                        </Typography>
                        <VBox>
                            <Typography variant="h4" sx={{ fontWeight: 400, color: theme.palette.black.main }}>
                                Privacy by Design
                            </Typography>
                            <Typography variant="body1" sx={{ color: theme.palette.black.main }}>
                                {t('home.principles.part1Text')}
                            </Typography>
                        </VBox>
                        <VBox>
                            <Typography variant="h4" sx={{ fontWeight: 400, color: theme.palette.black.main }}>
                                Privacy by Design
                            </Typography>
                            <Typography variant="body1" sx={{ color: theme.palette.black.main }}>
                                {t('home.principles.part2Text')}
                            </Typography>
                        </VBox>
                    </VBox>
                    <VBox>
                        <img
                            src={locket}
                            alt="logo"
                        />
                    </VBox>
                </HBox>
            </VBox>
        </LandingPageSectionWrapper>
    );
}

export default LandingPagePrinciples;
