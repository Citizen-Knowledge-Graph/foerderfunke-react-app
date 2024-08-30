import React from 'react';
import {Button, Typography} from '@mui/material';
import VStack from "../../../components/VStack";
import HStack from "../../../components/HStack";
import {Link} from "react-router-dom";
import globalStyles from "../../../styles/styles";

const EligibilityOverviewItemDetails = ({item}) => {
    return (
        <VStack alignItems={'flex-start'}>
            <Typography sx={styles.itemDescription}>
                {item.description}
            </Typography>
            <HStack>
                <Button
                    sx={styles.learnMoreButton}
                    variant="text"
                    component={Link}
                    to={`/benefit-page/${item.id}`}>
                    Learn More
                </Button>
            </HStack>
        </VStack>
    );
};

const styles = {
    itemDescription: {
        fontSize: '16px',
        fontWeight: '400',
    },
    learnMoreButton: {
        borderWidth: '1px',
        borderStyle: 'solid',
        borderRadius: '15px',
        borderColor: globalStyles.colorDarkGrey,
        color: globalStyles.colorDarkGrey,
        fontSize: '14px',
        fontWeight: 'bold',
        textTransform: 'none',
    }
};

export default EligibilityOverviewItemDetails;
