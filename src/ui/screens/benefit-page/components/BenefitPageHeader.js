import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Button, IconButton, Typography, Box } from "@mui/material";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
import { HBox, VBox } from "../../../shared-components/LayoutBoxes";
import globalStyles from "../../../styles/styles";
import { useSelectedBenefitStore, useSelectedTopicsStore } from "../../../storage/zustand";
import useTranslation from "../../../language/useTranslation";
import theme from "../../../../theme";

const BenefitPageHeader = ({ id, benefit, validatedStatus, categoryTitles }) => {
    const { t } = useTranslation();
    const [leiKaInfo, setLeiKaInfo] = useState(false);

    const setSelectedBenefit = useSelectedBenefitStore((state) => state.setSelectedBenefit);
    const clearSelectedTopics = useSelectedTopicsStore((state) => state.clear);

    console.log("validatedStatus", validatedStatus);

    return (
        <HBox sx={{ justifyContent: 'space-between', gap: theme.spacing(4), flexWrap: 'wrap' }}>
            <VBox sx={{ gap: theme.spacing(2) }}>
                <Typography variant="h1">
                    {benefit.title}
                </Typography>
                <VBox sx={{ gap: theme.spacing(2) }}>
                    <VBox sx={{ gap: theme.spacing(1) }}>
                        <HBox sx={{ gap: theme.spacing(1), alignItems: 'center' }}>
                            <Typography variant="body2" sx={{ color: 'black.light' }}>
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
                                <InfoOutlinedIcon sx={{ fontSize: 16, color: 'black.light' }} />
                            </IconButton>
                        </HBox>
                        {leiKaInfo && (
                            <Typography variant="body2" sx={{ color: 'black.light' }}>
                                {t('app.benefitPage.LeiKaInfo')}
                            </Typography>
                        )}
                    </VBox>
                    <Box sx={{
                        display: "flex",
                        flexDirection: "column",
                        width: '100%'
                    }} gap={2}>
                        <Box sx={{ display: 'flex', flexWrap: 'wrap' }} gap={2}>
                            {categoryTitles.map((category, index) => (
                                <Box
                                    key={index}
                                    sx={(theme) => ({
                                        padding: '8px 12px',
                                        borderRadius: theme.shape.borderRadius,
                                        border: `1px solid ${theme.palette.black.light}`,
                                    })}
                                >
                                    <Typography variant="body2" sx={{ color: 'black.light' }}>
                                        {category}
                                    </Typography>
                                </Box>
                            ))}
                        </Box>
                    </Box>
                </VBox>

            </VBox>
            <HBox sx={{ alignItems: 'flex-start' }}>
                {
                    id && !validatedStatus && (
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
                            to={`/onboarding-welcome/${id}`}
                            onClick={() => {
                                setSelectedBenefit(id);
                                clearSelectedTopics()
                            }}
                        >
                            <Typography variant="body1" sx={{ color: 'inherit', whiteSpace: 'nowrap' }}>
                                {t('app.benefitPage.eligibilityBtn')}
                            </Typography>
                        </Button>
                    )
                }
            </HBox>
        </HBox>
    );
}

export default BenefitPageHeader;
