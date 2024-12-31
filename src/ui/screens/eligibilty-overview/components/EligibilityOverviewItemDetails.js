import React from 'react';
import { Link } from "react-router-dom";
import { Button, Typography } from '@mui/material';
import { HBox, VBox } from '../../../shared-components/LayoutBoxes';
import useTranslation from "../../../language/useTranslation";
import { useSelectedBenefitStore, useSelectedTopicsStore } from "../../../storage/zustand";
import theme from '../../../../theme';

const EligibilityOverviewItemDetails = ({ item, eligible }) => {
    const { t } = useTranslation();
    const setSelectedBenefit = useSelectedBenefitStore((state) => state.setSelectedBenefit);
    const clearSelectedTopics = useSelectedTopicsStore((state) => state.clear);

    return (
        <VBox sx={{ gap: theme.spacing(2) }}>
            <Typography variant="body1">
                {item.description}
            </Typography>
            <HBox>
                {eligible === 'indeterminate' &&
                    <Button
                        variant="contained"
                        onClick={() => {
                            setSelectedBenefit(item.id);
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
                        to={`/onboarding-welcome/${true}`}>
                        {t('app.browseAll.checkElBtn')}
                    </Button>
                }
                <Button
                    variant="outlined"
                    sx={{ padding: theme.spacing(1), lineHeight: 1.2 }}
                    component={Link}
                    to={`/benefit-page/${item.id}`}>
                    {t('app.browseAll.learnMoreBtn')}
                </Button>
            </HBox>
        </VBox>
    );
};

export default EligibilityOverviewItemDetails;
