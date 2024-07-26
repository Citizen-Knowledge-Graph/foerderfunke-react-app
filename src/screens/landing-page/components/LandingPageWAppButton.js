import React from "react";
import {Card, CardContent, Typography} from "@mui/material";
import {Link} from "react-router-dom";
import HStack from "../../../components/HStack";
import globalStyles from "../../../styles/styles";

const LandingPageWAppButton = () => {
    return (
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
    );
}

const styles = {
    headerSectionButtonCard: {
        backgroundColor: globalStyles.primaryColor,
        boxShadow: 'none',
        borderRadius: '12px',
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
        fontSize: '20px',
        fontWeight: 'bold',
    },
}

export default LandingPageWAppButton;
