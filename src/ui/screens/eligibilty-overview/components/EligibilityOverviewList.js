import React from 'react';
import { Typography } from '@mui/material';
import { VBox } from '../../../shared-components/LayoutBoxes';
import EligibilityOverviewItem from "./EligibilityOverviewItem";
import useTranslation from "../../../language/useTranslation";
import theme from '../../../../theme';

const EligibilityOverviewList = ({ items, eligible, iconPath }) => {
    const { t } = useTranslation();
    const headerText = (() => {
        switch (eligible) {
            case 'eligible':
                return t('app.browseAll.eligible');
            case 'preliminary-eligible':
                return t('app.browseAll.preliminaryEligible');
            case 'non-eligible':
                return t('app.browseAll.notEligible');
            default:
                return t('app.browseAll.missingData');
        }
    })();        

    return (
        <VBox sx={{ gap: theme.spacing(2) }}>
            <Typography variant="h6">
                {headerText}
            </Typography>
            <VBox sx={{ gap: theme.spacing(2) }}>
                {items.map((item, index) => (
                    <EligibilityOverviewItem key={index} item={item} eligible={eligible} iconPath={iconPath}/>
                ))}
            </VBox>
        </VBox>

    );
};

export default EligibilityOverviewList;
