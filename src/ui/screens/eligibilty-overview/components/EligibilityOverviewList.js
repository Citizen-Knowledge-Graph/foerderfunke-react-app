import React from 'react';
import { Typography } from '@mui/material';
import { VBox } from '@/ui/shared-components/LayoutBoxes';
import useTranslation from "@/ui/language/useTranslation";
import EligibilityOverviewItem from "./EligibilityOverviewItem";

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
        <VBox sx={{ gap: 2 }}>
            <Typography variant="h6">
                {headerText}
            </Typography>
            <VBox sx={{ gap: 2 }}>
                {items.map((item, index) => (
                    <EligibilityOverviewItem key={index} item={item} eligible={eligible} iconPath={iconPath}/>
                ))}
            </VBox>
        </VBox>

    );
};

export default EligibilityOverviewList;
