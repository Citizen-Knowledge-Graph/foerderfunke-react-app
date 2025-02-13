import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Grid, Button, IconButton, Typography } from "@mui/material";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
import ContentBox from "../../../shared-components/ContentBox";
import { HBox, VBox } from "../../../shared-components/LayoutBoxes";
import globalStyles from "../../../styles/styles";
import { useSelectedBenefitStore, useSelectedTopicsStore } from "../../../storage/zustand";
import useTranslation from "../../../language/useTranslation";
import theme from "../../../../theme";

const BenefitPageHeader = ({ id, benefit, validatedStatus }) => {
    const { t } = useTranslation();
    const [leiKaInfo, setLeiKaInfo] = useState(false);

    const setSelectedBenefit = useSelectedBenefitStore((state) => state.setSelectedBenefit);
    const clearSelectedTopics = useSelectedTopicsStore((state) => state.clear);

    return (
        <ContentBox sx={{
            width: "100%",
            backgroundColor: theme.palette.custom.colorDeepTealTransparent
        }}>
            <VBox sx={{ alignItems: "flex-start", gap: theme.spacing(2) }}>
                <Typography variant="h4">
                    {benefit.title}
                </Typography>
                <Grid
                    container
                    spacing={2}
                >
                    <Grid item xs={12} sm={6}>
                        <VBox sx={{ alignItems: "flex-start", gap: theme.spacing(2) }}>
                            <HBox sx={{ gap: theme.spacing(1) }}>
                                <Typography variant="body2">
                                    LeiKa-Id: {benefit.leikaId}
                                </Typography>
                                <IconButton
                                    sx={{
                                        width: 24,
                                        height: 24,
                                        borderRadius: theme.shape.circle,
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        backgroundColor: 'white',
                                        '&:hover': {
                                            backgroundColor: globalStyles.colorLightGrey,
                                        },
                                    }}
                                    onClick={() => setLeiKaInfo(!leiKaInfo)}
                                >
                                    <InfoOutlinedIcon sx={{ fontSize: 16, color: 'black' }} />
                                </IconButton>
                            </HBox>
                            {leiKaInfo && (
                                <ContentBox sx={{ padding: theme.spacing(1), backgroundColor: "white" }}>
                                    <Typography variant="body2">
                                        {t('app.benefitPage.LeiKaInfo')}
                                    </Typography>
                                </ContentBox>
                            )}
                        </VBox>
                    </Grid>
                    {id && !validatedStatus && (
                        <Grid item xs={12} sm={6}
                            sx={{
                                textAlign: { xs: 'left', sm: 'right' },
                            }}
                        >
                            <Button
                                variant="contained"
                                onClick={() => {
                                    setSelectedBenefit(id);
                                    clearSelectedTopics()
                                }}
                                sx={{
                                    backgroundColor: 'secondary.main',
                                    borderColor: 'secondary.main',
                                    color: 'white',
                                    '&:hover': {
                                        color: 'black',
                                    }
                                }}
                                component={Link}
                                to={`/onboarding-welcome/${id}`}
                            >
                                {t('app.benefitPage.eligibilityBtn')}
                            </Button>
                        </Grid>
                    )}
                </Grid>
            </VBox>
        </ContentBox >
    );
}

export default BenefitPageHeader;
