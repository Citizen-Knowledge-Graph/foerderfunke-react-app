import React from 'react';
import {Typography} from '@mui/material';
import VStack from "../../../components/VStack";
import HStack from "../../../components/HStack";
import EligibilityOverviewItem from "./EligibilityOverviewItem";

const EligibilityOverviewList = ({items, eligible}) => {
    const headerText = (eligible === 'eligible') ? 'Berechtigt für:' : ((eligible === 'non-eligible') ? 'Nicht berechtigt für:' :
        'Unklar für:');

    return (
        <VStack sx={{width: '100%'}}>
            <HStack justifyContent={'flex-start'} sx={{width: '100%'}}>
                <Typography variant="h6" gutterBottom sx={styles.titleText}>
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
