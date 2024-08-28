import React from 'react';
import {Card, CardContent, Typography} from '@mui/material';
import VStack from "../../../components/VStack";
import HStack from "../../../components/HStack";
import {yellow, blue} from "@mui/material/colors";

const EligibilityOverviewScreen = () => {
    return (
        <VStack gap={0} alignItems={'center'} sx={{width: '100%'}}>
            <HStack justifyContent={'center'} sx={{width: '100%'}}>
                <VStack>
                    <Typography variant="h6" gutterBottom sx={styles.titleText}>
                        Deine Fördermöglichkeiten
                    </Typography>
                    <Typography variant="body1" gutterBottom>
                        Ergebnisse basieren auf den von Ihnen ausgefüllten Informationen. Denken Sie daran:
                        Je vollständiger Ihr Profil ist, desto genauer werden Ihre Ergebnisse sein.
                    </Typography>
                </VStack>
            </HStack>
            <HStack justifyContent={'flex-start'} sx={{width: '100%'}}>
                <VStack>
                    <Typography variant="body1" gutterBottom sx={styles.subTitleCardText}>
                        Die folgenden Ergebnisse sind rechtlich nicht bindend.
                    </Typography>
                </VStack>
            </HStack>
        </VStack>
    );
};

const styles = {
    titleText: {
        fontWeight: 'bold',
    },
    subTitleCardText: {
        fontSize: '12px',
        fontWeight: '400'
    }
};

export default EligibilityOverviewScreen;
