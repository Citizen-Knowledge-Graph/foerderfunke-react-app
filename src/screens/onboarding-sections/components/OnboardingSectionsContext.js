import React from 'react';
import {Box, Typography} from '@mui/material';
import {indigo} from '@mui/material/colors';
import { useUserStore } from '../../../storage/zustand';


const OnboardingSectionsContext = () => {
    const userId = useUserStore((state) => state.userId);

    return (
        <>
            <Box sx={styles.container}>
                <Typography variant="h4" gutterBottom sx={styles.titleText}>
                    Hallo {userId}!
                </Typography>
                <Typography variant="body1" gutterBottom sx={styles.subTitleText}>
                    Wir benötigen noch ein paar Informationen von dir, um für dich
                    nach geeigneten Sozialleistungen und anderen staatlichen
                    Förderungen zu suchen.
                </Typography>
            </Box>
        </>
    );
}

const styles = {
    container: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-start',
        textAlign: 'left',
    },
    titleText: {
        fontWeight: 'bold', // Make text bold
    },
    subTitleText: {
        fontSize: '16px',
        fontWeight: '400'
    },
    buttonCardContainer: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        width: '100%',
    },
    buttonCard: {
        display: 'flex',
        flexDirection: 'column',
        flex: '1',
        backgroundColor: indigo[600],
        borderRadius: '15px',
        boxShadow: 'none',
    },
    buttonCardContent: {
        padding: '16px',
        "&:last-child": {
            paddingBottom: '16px',
        }
    },
    buttonCardText: {
        color: 'white',
        fontWeight: '500',
        textAlign: 'center',
        margin: '0',
    }
};

export default OnboardingSectionsContext;
