import React from 'react';
import { Typography } from '@mui/material';
import { VBox } from '../../../shared-components/LayoutBoxes';
import EligibilityOverviewItem from "./EligibilityOverviewItem";
import useTranslation from "../../../language/useTranslation";
import theme from '../../../../theme';

const EligibilityOverviewList = ({ items, eligible, iconPath }) => {
    const { t } = useTranslation();
    const headerText = (eligible === 'eligible') ? t('app.browseAll.eligible') : ((eligible === 'non-eligible') ? t('app.browseAll.notEligible') :
        t('app.browseAll.missingData'));

    return (
        <VBox sx={{ gap: theme.spacing(2) }}>
            <Typography variant="h6">
                {headerText}
            </Typography>
            <VBox>
                {items.map((item, index) => (
                    <EligibilityOverviewItem key={index} item={item} eligible={eligible} iconPath={iconPath}/>
                ))}
            </VBox>
        </VBox>

    );
};

export default EligibilityOverviewList;
