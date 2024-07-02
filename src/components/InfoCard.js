import React from 'react';
import {Card, CardContent, Typography} from '@mui/material';
import HStack from './HStack';
import VStack from './VStack';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import {blue} from "@mui/material/colors";


const InfoCard = ({text}) => {
    return (
        <VStack>
            <Card sx={{...styles.infoCard}} data-testid="card">
                <CardContent sx={styles.infoCardContent} data-testid="card-content">
                    <HStack justifyContent={'space-between'}>
                        <VStack sx={styles.infoBox} justifyContent={'flex-start'} datatest-id='infoBox'>
                            <InfoOutlinedIcon/>
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
        backgroundColor: blue[100],
        boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
    },
    infoCardContent: {
        padding: "10px",
        "&:last-child": {
            paddingBottom: '10px',
        },
    },
    infoCardText: {
        color: "black",
        fontSize: '14px',
        fontWeight: '400',
    }
};
