import React from 'react';
import { Typography } from '@mui/material';
import { VBox } from '@/ui/shared-components/LayoutBoxes';
import EligibilityOverviewItem from "./EligibilityOverviewItem";

const EligibilityOverviewList = ({ t, items, isDesktop, eligible, iconPath }) => {
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

    const sortedItems = [...items].sort((a, b) =>
        a.title.toLowerCase() < b.title.toLowerCase() ? -1 : 1
    );

    return (
        <VBox sx={{ gap: 2 }}>
            <Typography variant="h6">
                {headerText}
            </Typography>
            <VBox sx={{ gap: 2 }}>
                {sortedItems.map((item, index) => (
                    <EligibilityOverviewItem t={t} key={index} isDesktop={isDesktop} item={item} eligible={eligible} iconPath={iconPath}/>
                ))}
            </VBox>
        </VBox>

    );
};

export default EligibilityOverviewList;
