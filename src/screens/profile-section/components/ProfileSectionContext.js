import React from 'react';
import {Box, Card, CardContent, Typography} from '@mui/material';
import VStack from "../../../components/VStack";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
import {blue} from "@mui/material/colors";
import HStack from "../../../components/HStack";

const ProfileSectionContext = ({title, infoBox}) => {

    return (
        <VStack sx={{width: '100%'}}>
            <VStack gap={1}>
                <HStack>
                    <Typography variant="h4" gutterBottom sx={styles.titleText}>
                        {title}
                    </Typography>
                </HStack>
                {
                    infoBox ? (
                        <HStack>
                            <Card sx={styles.infoCard} data-testid="card">
                                <CardContent sx={styles.infoCardContent} data-testid="card-content">
                                    <Box sx={styles.infoCardRow}>
                                        <Box sx={styles.infoBox} datatest-id='infoBox'>
                                            <InfoOutlinedIcon/>
                                        </Box>
                                        <Typography variant="body2" component="div">
                                            Let’s start your profile to discover social benefits for you. If you need
                                            help,
                                            you can always use the info icon.
                                        </Typography>
                                    </Box>
                                </CardContent>
                            </Card>
                        </HStack>
                    ) : null
                }
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
    },
    infoCard: {
        width: '100%',
        borderRadius: '15px',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        borderWidth: '1px',
        borderStyle: 'solid',
        borderColor: blue[100],
        boxShadow: 'none',
    },
    infoCardContent: {
        padding: '16px',
        "&:last-child": {
            paddingBottom: '16px',
        }
    },
    infoCardRow: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        gap: '10px',
    },
    infoBox: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-start',
    },
};

export default ProfileSectionContext;
