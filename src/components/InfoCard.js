import React from 'react';
import { Card, CardContent, Typography } from '@mui/material';
import HStack from './HStack';
import VStack from './VStack';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import globalStyles from "../styles/styles";

const InfoCard = ({ text, hollow = false }) => {
    return (
        <VStack>
            <Card
                sx={{
                    ...styles.infoCard,
                    ...(hollow && styles.hollowCard)
                }}
                data-testid="card"
            >
                <CardContent
                    sx={{
                        ...styles.infoCardContent,
                        ...(hollow && styles.hollowCardContent)
                    }}
                    data-testid="card-content"
                >
                    <HStack justifyContent={'space-between'}>
                        <VStack sx={styles.infoBox} justifyContent={'flex-start'} datatest-id='infoBox'>
                            <InfoOutlinedIcon />
                        </VStack>
                        <Typography variant="body2" component="div" sx={styles.infoCardText}>
                            {text}
                        </Typography>
                    </HStack>
                </CardContent>
            </Card>
        </VStack>
    );
};

export default InfoCard;

const styles = {
    infoCard: {
        borderRadius: '15px',
        backgroundColor: globalStyles.tertiaryColorTransparent,
        boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
    },
    hollowCard: {
        backgroundColor: 'white',
        border: `1px solid ${globalStyles.tertiaryColorTransparent}`,
        boxShadow: 'none',
    },
    infoCardContent: {
        padding: '10px',
        "&:last-child": {
            paddingBottom: '10px',
        },
    },
    hollowCardContent: {
        padding: '10px',
        "&:last-child": {
            paddingBottom: '10px',
        },
    },
    infoCardText: {
        color: 'black',
        fontSize: '14px',
        fontWeight: '400',
    }
};
