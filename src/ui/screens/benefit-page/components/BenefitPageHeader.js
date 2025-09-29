import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Button, IconButton, Typography, Box } from "@mui/material";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
import { HBox, VBox } from "@/ui/shared-components/LayoutBoxes";
import { useSelectedBenefitsStore, useSelectedTopicsStore } from "@/ui/storage/zustand";
import useTranslation from "@/ui/language/useTranslation";
import theme from "@/theme";

const BenefitPageHeader = ({ id, benefit, validatedStatus, categoryTitles }) => {
    const { t } = useTranslation();
    const [leiKaInfo, setLeiKaInfo] = useState(false);

    const setSelectedBenefits = useSelectedBenefitsStore((state) => state.setSelectedBenefits);
    const clearSelectedTopics = useSelectedTopicsStore((state) => state.clear);

    return (
        <HBox sx={{ justifyContent: 'space-between', gap: 4, flexWrap: 'wrap' }}>
            <VBox sx={{ gap: 2 }}>
                <Typography variant="h1">
                    {benefit?.title}
                </Typography>
                <VBox sx={{ gap: 2 }}>
                    <VBox sx={{ gap: 1 }}>
                        <HBox sx={{ gap: 1, alignItems: 'center' }}>
                            <Typography variant="body2" sx={{ color: 'black.light' }}>
                                LeiKa-Id: {benefit?.leikaId}
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
                                        backgroundColor: 'black.light',
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
                    {categoryTitles?.length > 0 && (
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
                                            backgroundColor: 'white.main',
                                            borderRadius: theme.shape.borderRadius,
                                            border: `1px solid ${theme.palette.white.dark}`,
                                        })}
                                    >
                                        <Typography variant="body2">
                                            {category}
                                        </Typography>
                                    </Box>
                                ))}
                            </Box>
                        </Box>
                    )}
                </VBox>

            </VBox>
            <HBox sx={{ alignItems: 'flex-start' }}>
                {
                    id && !validatedStatus && (
                        <Button
                            variant="contained"
                            sx={{
                                '&:hover': {
                                    backgroundColor: 'yellow.main',
                                    color: 'black.main',
                                    borderColor: 'yellow.main'
                                }
                            }}
                            component={Link}
                            to={'/onboarding-welcome'}
                            onClick={() => {
                                setSelectedBenefits([id]);
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
