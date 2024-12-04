import React from 'react';
import {Typography} from '@mui/material';
import VStack from "../../../shared-components/VStack";
import HStack from "../../../shared-components/HStack";
import EligibilityOverviewItem from "./EligibilityOverviewItem";
import useTranslation from "../../../language/useTranslation";

const EligibilityOverviewList = ({items, eligible}) => {
    const { t } = useTranslation();
    const headerText = (eligible === 'eligible') ? t('app.browseAll.eligible') : ((eligible === 'non-eligible') ? t('app.browseAll.notEligible') :
        t('app.browseAll.missingData'));

    return (
        <VStack sx={{width: '100%', padding: '12px', borderRadius: '12px'}}>
            <HStack justifyContent={'flex-start'} sx={{width: '100%'}}>
                <Typography variant="h6" sx={styles.titleText}>
                    {headerText}
                </Typography>
            </HStack>
            <VStack gap={1} alignItems={'center'} sx={{width: '100%'}}>
                {items.map((item, index) => (
                    <EligibilityOverviewItem key={index} item={item} eligible={eligible}/>
                ))}
            </VStack>
        </VStack>

    );
};

const styles = {
    titleText: {
        fontWeight: 'bold',
    }
};

export default EligibilityOverviewList;
