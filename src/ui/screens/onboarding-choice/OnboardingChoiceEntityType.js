import React from 'react';
import { Typography, Button, Grid } from '@mui/material';
import Layout from '../../shared-components/Layout';
import AppScreenWrapper from "../../shared-components/AppScreenWrapper";
import useTranslation from "../../language/useTranslation";
import theme from "../../../theme";
import { VBox } from '../../shared-components/LayoutBoxes';
import { useEntityTypeStore } from '../../storage/zustand';
import { useNavigate } from "react-router-dom";

const OnboardingChoiceEntityType = () => {
    const { t } = useTranslation();
    const setEntityType = useEntityTypeStore(state => state.setEntityType);
    const navigate = useNavigate(); 

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
                            Wir teilen die Förderungen in zwei Kategorien ein. Zum einen gibt es Sozialleistungen, die
                            für dich als Privatperson in Frage kommen und zum anderen gibt es Unternehmensförderungen, die
                            für Unternehmen in Frage kommen. Wähle bitte aus, welche Kategorie für dich relevant ist.
                        </Typography>
                        <Grid container spacing={2}>
                            <Grid item xs={12} sm={6} container>
                                <Button
                                    sx={{
                                        flex: 1,
                                        borderStyle: 'solid',
                                        borderWidth: '1px',
                                        backgroundColor: theme.palette.yellow.main,
                                        borderColor: theme.palette.yellow.main,
                                        '&:hover': {
                                            backgroundColor: theme.palette.white.main,
                                        },
                                    }}
                                    onClick={(event) => {
                                        event.preventDefault();
                                        setEntityType('social_benefits');
                                        navigate("/eligibility-overview");
                                    }}     
                                >
                                    <VBox>
                                        <Typography variant="h5">
                                            Sozialleistungen
                                        </Typography>
                                        <Typography variant="body1" sx={{ textAlign: 'left' }}>
                                            Möchtest du wissen, welche Sozialleistungen für dich in Frage kommen?
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
                                        backgroundColor: theme.palette.blue.main,
                                        borderColor: theme.palette.blue.main,
                                        '&:hover': {
                                            backgroundColor: theme.palette.white.main,
                                        },
                                    }}
                                    onClick={(event) => {
                                        event.preventDefault();
                                        setEntityType('company_benefits');
                                        navigate("/eligibility-overview");
                                    }}                            >
                                    <VBox>
                                        <Typography variant="h5">
                                            Unternehmensförderungen
                                        </Typography>
                                        <Typography variant="body1" sx={{ textAlign: 'left' }}>
                                            Möchtest du wissen, welche Förderungen für dein Unternehmen in Frage kommen?
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

export default OnboardingChoiceEntityType;
