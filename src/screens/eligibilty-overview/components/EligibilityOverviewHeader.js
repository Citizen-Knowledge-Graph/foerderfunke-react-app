import React from 'react';
import {Card, CardContent, Typography} from '@mui/material';
import VStack from "../../../components/VStack";
import HStack from "../../../components/HStack";
import {yellow, blue} from "@mui/material/colors";

const EligibilityOverviewScreen = () => {
    return (
        <VStack gap={0} alignItems={'center'} sx={{width: '100%'}}>
            <HStack justifyContent={'center'} sx={{width: '100%'}}>
                <Card sx={styles.titleCard}>
                    <CardContent sx={styles.cardContent}>
                        <Typography variant="h6" gutterBottom sx={styles.titleText}>
                            Deine Fördermöglichkeiten
                        </Typography>
                        <Typography variant="body1" gutterBottom>
                            Ergebnisse basieren auf den von Ihnen ausgefüllten Informationen. Denken Sie daran:
                            Je vollständiger Ihr Profil ist, desto genauer werden Ihre Ergebnisse sein.
                        </Typography>
                    </CardContent>
                </Card>
            </HStack>
            <HStack justifyContent={'center'} sx={{width: '100%'}}>
                <Card sx={styles.subTitleCard}>
                    <CardContent sx={styles.cardContent}>
                        <Typography variant="body1" gutterBottom sx={styles.subTitleCardText}>
                            Die folgenden Ergebnisse sind rechtlich nicht bindend.
                        </Typography>
                    </CardContent>
                </Card>
            </HStack>
        </VStack>
    );
};

const styles = {
    titleCard: {
        width: '100%',
        borderRadius: '0px',
        backgroundColor: yellow[100],
        boxShadow: 'none',
        padding: 0,
    },
    cardContent: {
        padding: '16px',
        "&:last-child": {
            paddingBottom: '16px',
        }
    },
    subTitleCard: {
        backgroundColor: blue[100],
        width: '100%',
        borderRadius: '0px',
        boxShadow: 'none',
        padding: 0,
    },
    titleText: {
        fontWeight: 'bold',
    },
    subTitleCardText: {
        fontSize: '12px',
        fontWeight: '400'
    }
};

export default EligibilityOverviewScreen;
