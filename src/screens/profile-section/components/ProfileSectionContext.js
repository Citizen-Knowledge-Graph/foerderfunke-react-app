import React from 'react';
import {Typography} from '@mui/material';
import VStack from "../../../components/VStack";

const ProfileSectionContext = ({title}) => {

    return (
        <VStack>
            <VStack gap={1}>
                <Typography variant="h4" gutterBottom sx={styles.titleText}>
                    {title}
                </Typography>
                <Typography variant="body1" gutterBottom sx={styles.subTitleText}>
                    Bevor wir losgehen können, benötigen wir noch einen Benutzernamen von dir.
                </Typography>
            </VStack>
        </VStack>
    );
};

const styles = {
    titleText: {
        fontWeight: 'bold',
    },
    subTitleText: {
        fontSize: '16px',
        fontWeight: '400'
    }
};

export default ProfileSectionContext;
