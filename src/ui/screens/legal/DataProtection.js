import React from "react";
import Layout from "@/ui/shared-components/Layout";
import LandingPageSectionWrapper from "@/ui/screens/landing-page/components/LandingPageSectionWrapper";
import { Typography } from "@mui/material";
import { VBox } from "@/ui/shared-components/LayoutBoxes";
import useTranslation from "@/ui/language/useTranslation";
import { useStore } from "@/ui/shared-components/ViewportUpdater";

const DataProtection = () => {
    const isDesktop = useStore((state) => state.isDesktop);
    const { t } = useTranslation();

    return (
        <Layout>
            <LandingPageSectionWrapper isDesktop={isDesktop}>
                <VBox sx={{
                    maxWidth: "1118px",
                    gap: isDesktop ? 6 : 4
                }}>
                    <Typography variant="h1">
                        {t('home.legal.dataProtection.title')}
                    </Typography>
                    <Typography variant="body1">
                        {t('home.legal.dataProtection.introduction')}
                    </Typography>
                    <VBox sx={{ gap: 1 }}>
                        <Typography variant="h6">
                            {t('home.legal.dataProtection.responsible')}
                        </Typography>
                        <VBox sx={{ gap: 0 }}>
                            <Typography variant="body1">
                                FörderFunke UG (haftungsbeschränkt)
                            </Typography>
                            <Typography variant="body1">
                                c/o Impact Hub Berlin, Rollbergstraße 28A
                            </Typography>
                            <Typography variant="body1">
                                12053 Berlin
                            </Typography>
                            <Typography variant="body1">
                                E-Mail: info@foerderfunke.org
                            </Typography>
                        </VBox>
                    </VBox>
                    <VBox sx={{ gap: 1 }}>
                        <Typography variant="h6">
                            {t('home.legal.dataProtection.eligibilityCheck')}
                        </Typography>
                        <Typography variant="body1">
                            {t('home.legal.dataProtection.eligibilityCheckInformation')}
                        </Typography>
                    </VBox>
                    <VBox sx={{ gap: 1 }}>
                        <Typography variant="h6">
                            Hosting
                        </Typography>
                        <Typography variant="body1">
                            {t('home.legal.dataProtection.hostingInformation')}
                        </Typography>
                    </VBox>
                    <VBox sx={{ gap: 1 }}>
                        <Typography variant="h6">
                            {t('home.legal.dataProtection.feedback')}
                        </Typography>
                        <Typography variant="body1">
                            {t('home.legal.dataProtection.feedbackInformation')}
                        </Typography>
                    </VBox>
                    <VBox sx={{ gap: 1 }}>
                        <Typography variant="h6">
                            {t('home.legal.dataProtection.webanalytics')}
                        </Typography>
                        <Typography variant="body1">
                            {t('home.legal.dataProtection.webanalyticsInformation')}
                        </Typography>
                    </VBox>
                </VBox>
            </LandingPageSectionWrapper >
        </Layout >
    );
}
export default DataProtection;
