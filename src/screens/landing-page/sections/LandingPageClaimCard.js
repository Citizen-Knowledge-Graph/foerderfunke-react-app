import VStack from "../../../components/VStack";
import HStack from "../../../components/HStack";
import {Card, CardContent, Typography} from "@mui/material";
import {green} from "@mui/material/colors";
import {Link} from "react-router-dom";
import React from "react";

const LandingPageClaimCard = () => {

    return (
        <VStack sx={{width: "100%"}}>
            <VStack gap={5} sx={styles.infoCard}>
                <VStack>
                    <HStack>
                        <Typography sx={styles.titleText}>
                            Claim your benefits
                        </Typography>
                    </HStack>
                    <HStack>
                        <Typography sx={styles.subTitleText}>
                            Find benefits and support programmes for you!
                        </Typography>
                    </HStack>
                </VStack>
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
        </VStack>
    )
}

const styles = {
    infoCard: {
        borderRadius: '15px',
        backgroundColor: green[500],
        padding: '32px 16px 32px 16px',
        boxShadow: '2px 2px 4px 2px rgba(0, 0, 0, 0.2)',
    },
    titleText: {
        fontWeight: 'bold',
        fontSize: '28px',
        color: 'white',
    },
    subTitleText: {
        fontSize: '24px',
        color: 'white',
    },
    imageContainer: {
        borderRadius: '15px',
        padding: '16px',
    },
    headerSectionButtonCard: {
        backgroundColor: 'white',
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
};

export default LandingPageClaimCard;
