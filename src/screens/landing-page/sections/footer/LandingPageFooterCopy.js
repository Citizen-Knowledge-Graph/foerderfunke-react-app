import VStack from "../../../../components/VStack";
import HStack from "../../../../components/HStack";
import {Card, CardContent, Typography} from "@mui/material";
import globalStyles from "../../../../styles/styles";
import Divider from '@mui/material/Divider';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';
import CopyrightIcon from '@mui/icons-material/Copyright';
import {Link} from "react-router-dom";
import React from "react";

const LandingPageFooter = () => {
    return (
        <VStack sx={styles.footerContainer}>
            <VStack alignItems={'center'} sx={{width: "100%"}}>
                <HStack>
                    <Typography sx={styles.footerHeaderTitle}>
                        FoerderFunke
                    </Typography>
                </HStack>
            </VStack>
            <VStack alignItems={'center'} sx={{width: "100%"}}>
                <HStack gap={1}>
                    <EmailIcon />
                    <Typography sx={styles.contactText}>
                        info@foerderfunke.org
                    </Typography>
                </HStack>
                <HStack gap={1}>
                    <LinkedInIcon/>
                    <Typography sx={styles.contactText}>
                        LinkedIn FoerderFunke
                    </Typography>
                </HStack>
            </VStack>
            <Divider variant="middle"/>
            <VStack alignItems={'center'} sx={{width: "100%"}}>
                <HStack>
                    <Typography>
                        Impressum
                    </Typography>
                </HStack>
                <HStack>
                    <Typography>
                        Data Protection
                    </Typography>
                </HStack>
                <HStack>
                    <Typography>
                        How it works
                    </Typography>
                </HStack>
                <HStack>
                    <Typography>
                        About us
                    </Typography>
                </HStack>
                <HStack alignItems={'center'} gap={1}>
                    <CopyrightIcon/>
                    <Typography sx={styles.copyrightText}>
                        2024 by FörderFunke. All rights reserved.
                    </Typography>
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
        </VStack>
    )
}

const styles = {
    footerContainer: {
        width: "100%",
        padding: "16px",
        backgroundColor: globalStyles.primaryColor,
    },
    footerHeaderTitle: {
        fontWeight: "bold",
        fontSize: "28px"
    },
    contactText: {
        textDecoration: "underline",
    },
    copyrightText: {
        fontSize: "14px",
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
}

export default LandingPageFooter;
