import React from 'react';
import {Typography} from '@mui/material';
import ClickIconCard from "../../../components/ClickIconCard";
import VStack from "../../../components/VStack";
import HStack from "../../../components/HStack";
import {grey} from "@mui/material/colors";

const EligibilityOverviewItemDetails = ({description}) => {
    return (
        <VStack gap={1} alignItems={'flex-start'}>
            <Typography variant="body2" gutterBottom>
                {description}
            </Typography>
            <HStack>
                <ClickIconCard link={'/'} text={'Learn more'} iconColor={grey[500]} icon={null}/>
            </HStack>
        </VStack>
    );
};

export default EligibilityOverviewItemDetails;
