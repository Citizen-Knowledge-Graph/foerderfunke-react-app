import React from 'react';
import {Typography} from '@mui/material';
import ClickIconCard from "../../../components/ClickIconCard";
import VStack from "../../../components/VStack";
import HStack from "../../../components/HStack";
import {grey} from "@mui/material/colors";

const EligibilityOverviewItemDetails = ({item}) => {
    return (
        <VStack gap={0} alignItems={'flex-start'}>
            <Typography variant="body2" gutterBottom>
                {item.description}
            </Typography>
            <HStack>
                <ClickIconCard link={`/benefit-page/${item.id}`} text={'Learn more'} iconColor={grey[700]} icon={null}/>
            </HStack>
        </VStack>
    );
};

export default EligibilityOverviewItemDetails;
