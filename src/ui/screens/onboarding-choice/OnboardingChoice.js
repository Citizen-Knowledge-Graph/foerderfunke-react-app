import React from 'react';
import { Typography, Button } from '@mui/material';
import Layout from '../../shared-components/Layout';
import AppScreenWrapper from "../../shared-components/AppScreenWrapper";
import useTranslation from "../../language/useTranslation";
import theme from "../../../theme";
import { Link } from "react-router-dom";
import { HBox, VBox } from '../../shared-components/LayoutBoxes';
import { useStore } from '../../shared-components/ViewportUpdater';

const OnboardingChoice = () => {
    const isDesktop = useStore((state) => state.isDesktop);
    const { t } = useTranslation();
    const gap = isDesktop ? theme.spacing(8) : theme.spacing(4);

    return (
        <Layout isApp={true}>
            <AppScreenWrapper back={true}>
                <VBox sx={{ gap: gap }}>
                    <HBox sx={{ maxWidth: '800px' }}>
                        <Typography variant="h1">
                            {t('app.discoverChoice.header')}
                        </Typography>
                    </HBox>
                    <HBox sx={{ maxWidth: '800px' }}>
                        <Typography variant="body1">
                            {t('app.discoverChoice.text')}
                        </Typography>
                    </HBox>
                    <HBox sx={{ flexWrap: 'wrap' }}>
                        <HBox>
                            <Button variant="text"
                                sx={{
                                    padding: "32px 32px",
                                    boxShadow: '0px 1px 2px rgba(0, 0, 0, 0.25)',
                                    '&:hover': {
                                        backgroundColor: theme.palette.yellow.main,
                                    },
                                }}
                                component={Link}
                                to={"/onboarding-welcome-topics"}
                            >
                                <HBox sx={{ alignItems: 'center' }}>
                                    <VBox sx={{ alignItems: 'flex-start' }}>
                                        <Typography variant="h6">
                                            {t('app.discoverChoice.quickCheck')}
                                        </Typography>
                                        <Typography variant="body1" sx={{ textAlign: 'left' }}>
                                            {t('app.discoverChoice.quickCheckComment')}
                                        </Typography>
                                    </VBox>
                                </HBox>
                            </Button>
                        </HBox>
                        <HBox>
                            <Button
                                sx={{
                                    padding: "32px 32px",
                                    boxShadow: '0px 1px 2px rgba(0, 0, 0, 0.25)',
                                    '&:hover': {
                                        backgroundColor: theme.palette.yellow.main,
                                    },
                                }}
                                component={Link}
                                to={"/eligibility-overview"}
                            >
                                <HBox sx={{ alignItems: 'center' }}>
                                    <VBox sx={{ alignItems: 'flex-start' }}>
                                        <Typography variant="h6">
                                            {t('app.discoverChoice.browseAll')}
                                        </Typography>
                                    </VBox>
                                </HBox>
                            </Button>
                        </HBox>
                    </HBox>
                </VBox>
            </AppScreenWrapper>
        </Layout >
    );
};

export default OnboardingChoice;
