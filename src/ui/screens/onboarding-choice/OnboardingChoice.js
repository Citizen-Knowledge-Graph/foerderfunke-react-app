import React from 'react';
import { Typography, Button, Grid } from '@mui/material';
import Layout from '../../shared-components/Layout';
import AppScreenWrapper from "../../shared-components/AppScreenWrapper";
import useTranslation from "../../language/useTranslation";
import theme from "../../../theme";
import { Link } from "react-router-dom";
import { VBox } from '../../shared-components/LayoutBoxes';

const OnboardingChoice = () => {
    const { t } = useTranslation();

    return (
        <Layout isApp={true}>
            <AppScreenWrapper back={true}>
                <VBox sx={{ gap: theme.spacing(4) }}>
                    <VBox sx={{ alignItems: "center" }}>
                        <Typography variant="h4">
                            {t('app.discoverChoice.header')}
                        </Typography>
                    </VBox>
                    <VBox sx={{ gap: theme.spacing(4) }}>
                        <Typography variant="body1">
                            {t('app.discoverChoice.text')}
                        </Typography>
                        <Grid container spacing={2}>
                            <Grid item xs={12} sm={6} container>
                                <Button
                                    sx={{
                                        flex: 1,
                                        borderStyle: 'solid',
                                        borderWidth: '1px',
                                        borderColor: theme.palette.primary.main,
                                        '&:hover': {
                                            backgroundColor: theme.palette.primary.main,
                                        },
                                    }}
                                    component={Link}
                                    to={"/onboarding-welcome-topics"}
                                >
                                    <VBox>
                                        <Typography variant="h6">
                                            {t('app.discoverChoice.quickCheck')}
                                        </Typography>
                                        <Typography variant="body1" sx={{ textAlign: 'left' }}>
                                            {t('app.discoverChoice.quickCheckComment')}
                                        </Typography>
                                    </VBox>
                                </Button>
                            </Grid>
                            <Grid item xs={12} sm={6} container>
                                <Button
                                    sx={{
                                        flex: 1,
                                        borderStyle: 'solid',
                                        borderWidth: '1px',
                                        borderColor: theme.palette.primary.main,
                                        '&:hover': {
                                            backgroundColor: theme.palette.primary.main,
                                        },
                                    }}
                                    component={Link}
                                    to={"/eligibility-overview"}
                                >
                                    <VBox>
                                        <Typography variant="h6">
                                            {t('app.discoverChoice.browseAll')}
                                        </Typography>
                                    </VBox>
                                </Button>
                            </Grid>
                        </Grid>
                    </VBox>
                </VBox>
            </AppScreenWrapper>
        </Layout>
    );
};

export default OnboardingChoice;
