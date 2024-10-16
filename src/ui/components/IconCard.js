import React from 'react';
import { Card, CardContent, Typography } from '@mui/material';
import HStack from './HStack';

const IconCard = ({ icon: Icon, iconColor, text }) => {
    return (
        <Card sx={{ ...styles.infoCard, borderColor: iconColor }}>
            <CardContent sx={styles.infoCardContent}>
                <HStack gap={1}>
                    <Icon sx={{...styles.icon, color: iconColor}} />
                    <Typography variant="body2" sx={styles.infoCardText}>
                        {text}
                    </Typography>
                </HStack>
            </CardContent>
        </Card>
    );
};

export default IconCard;

const styles = {
    infoCard: {
        borderRadius: '15px',
        borderStyle: 'solid',
        borderWidth: '1px',
        boxShadow: 'none',
    },
    icon: {
        height: '20px'
    },
    infoCardContent: {
        padding: "6px 8px 6px 8px",
        "&:last-child": {
            paddingBottom: '6px',
        },
    },
    infoCardText: {
        color: "black",
        fontSize: '14px',
        fontWeight: '400',
    }
};
