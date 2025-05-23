import React from 'react';
import { Typography, Button } from '@mui/material';
import Layout from '@/ui/shared-components/Layout';
import AppScreenWrapperContainer from "@/ui/shared-components/app-screen-wrapper/AppScreenWrapperContainer";
import useTranslation from "@/ui/language/useTranslation";
import { Link } from "react-router-dom";
import { HBox, VBox } from '@/ui/shared-components/LayoutBoxes';
import useJointValidationStatus from "@/ui/shared-hooks/utility/useJointValidationStatus";

const OnboardingChoice = () => {
    const { t } = useTranslation();
    const { isLoadingJointStatus } = useJointValidationStatus();

    return (
        <Layout isApp={true}>
            <AppScreenWrapperContainer isLoading={isLoadingJointStatus} backTarget={'/user-routing'}>
                <VBox sx={{ gap: { xs: 4, md: 8 } }}>
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
                                        backgroundColor: 'yellow.main',
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
                                    height: '100%',
                                    padding: "32px 32px",
                                    boxShadow: '0px 1px 2px rgba(0, 0, 0, 0.25)',
                                    '&:hover': {
                                        backgroundColor: 'yellow.main',
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
            </AppScreenWrapperContainer>
        </Layout >
    );
};

export default OnboardingChoice;
