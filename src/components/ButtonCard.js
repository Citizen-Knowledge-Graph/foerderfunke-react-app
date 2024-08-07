import React from 'react';
import {Card, CardContent, Typography} from '@mui/material';
import HStack from './HStack';
import VStack from './VStack';
import {blue} from "@mui/material/colors";
import {Link} from "react-router-dom";


const ButtonCard = ({
                        link,
                        text,
                        backgroundColor,
                        color = "white",
                    }) => {
    return (
        <VStack sx={styles.buttonContainer}>
            <Link to={link} style={{textDecoration: 'none', width: '100%'}}>
                <Card sx={{...styles.buttonCard, backgroundColor: backgroundColor, color: color}}
                      data-testid="card">
                    <CardContent sx={styles.buttonCardContent} data-testid="card-content">
                        <HStack justifyContent={'center'}>
                            <Typography variant="h6" component="div" sx={styles.buttonCardText}>
                                {text}
                            </Typography>
                        </HStack>
                    </CardContent>
                </Card>
            </Link>
        </VStack>
    );
};

export default ButtonCard;

const styles = {
    buttonContainer: {
        width: "100%"
    },
    buttonCard: {
        borderRadius: '15px',
        backgroundColor: blue[100],
        boxShadow: 'none',
    },
    buttonCardContent: {
        padding: "16px",
        "&:last-child": {
            paddingBottom: '16px',
        },
    },
    buttonCardText: {
        color: "white",
        fontWeight: 'bold',
    }
};
