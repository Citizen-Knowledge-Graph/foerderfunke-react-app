import HStack from "../../../components/HStack";
import {Card, CardContent, Typography} from "@mui/material";
import React from "react";
import VStack from "../../../components/VStack";
import {Link} from "react-router-dom";
import globalStyles from "../../../styles/styles";

const LandingPageHeader = () => {
    return (
        <VStack>
            <HStack justifyContent={'center'}>
                <Typography sx={styles.headerSectionTitle}>Check benefits and financial support you can get
                    support</Typography>
            </HStack>
            <HStack justifyContent={'center'} sx={{width: '100%'}}>
                <Card sx={styles.headerSectionButtonCard}>
                    <Link to={'/onboarding-choice'}
                          style={{textDecoration: 'none', color: "black", width: '100%'}}>
                        <CardContent sx={styles.headerSectionButtonCardContent}>
                            <HStack gap={1} alignItems={'center'}>
                                <Typography sx={styles.headerSectionButtonCardText}>
                                    Try FörderFunke
                                </Typography>
                            </HStack>
                        </CardContent>
                    </Link>
                </Card>
            </HStack>
        </VStack>
    )
}

const styles = {
    headerSectionTitle: {
        fontWeight: 'bold',
        fontSize: '28px',
        textAlign: 'center',
    },
    headerSectionText: {
        fontSize: '20px',
        textAlign: 'center',
    },
    headerSectionButtonCard: {
        backgroundColor: globalStyles.primaryColor,
        boxShadow:
            'none',
        borderRadius:
            '12px',
    },
    headerSectionButtonCardContent: {
        padding: "3px 6px 4px 8px",
        "&:last-child":
            {
                paddingBottom: '3px',
            }
        ,
    },
    headerSectionButtonCardText: {
        color: "black",
        fontSize:
            '20px',
        fontWeight:
            'bold',
    },
}

export default LandingPageHeader;
