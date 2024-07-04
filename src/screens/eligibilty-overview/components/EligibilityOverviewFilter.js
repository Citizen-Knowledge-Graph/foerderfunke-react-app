import React from 'react';
import {Typography} from '@mui/material';
import VStack from "../../../components/VStack";
import HStack from "../../../components/HStack";
import {grey} from "@mui/material/colors";
import ClickIconCard from "../../../components/ClickIconCard";

const EligibilityOverviewFilter = () => {
    return (
        <VStack gap={0} alignItems={'center'} sx={{width: '100%'}}>
            <HStack justifyContent={'flex-start'} sx={{width: '100%'}}>
                <Typography variant="h6" gutterBottom sx={styles.titleText}>
                    Results by:
                </Typography>
            </HStack>
            <HStack justifyContent={'flex-start'} sx={{width: '100%'}}>
                <ClickIconCard link={'/'} iconColor={grey[500]} icon={null} text="Eligibility" />
                <ClickIconCard link={'/'} iconColor={grey[500]} icon={null} text="Topic" />
                <ClickIconCard link={'/'} iconColor={grey[500]} icon={null} text="A-Z" />
            </HStack>
        </VStack>
    );
};

const styles = {
    titleText: {
        fontWeight: 'bold',
    },
};

export default EligibilityOverviewFilter;
