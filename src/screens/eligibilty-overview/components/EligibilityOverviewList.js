import React from 'react';
import {Typography} from '@mui/material';
import VStack from "../../../components/VStack";
import HStack from "../../../components/HStack";
import EligibilityOverviewItem from "./EligibilityOverviewItem";

const EligibilityOverviewList = ({items, eligible}) => {
    const headerText = (eligible === 'eligible') ? 'Eligible:' : ((eligible === 'non-eligible') ? 'Not eligible:' :
        'Missing data:');

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
    },
    itemTitle: {
        fontWeight: 'bold',
    }
};

export default EligibilityOverviewList;
