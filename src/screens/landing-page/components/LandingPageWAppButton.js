import React from "react";
import {Card, CardContent, Typography} from "@mui/material";
import {Link} from "react-router-dom";
import HStack from "../../../components/HStack";
import globalStyles from "../../../styles/styles";

const LandingPageWAppButton = ({backgroundColor}) => {
    const buttonColor = (() => {
        switch (backgroundColor) {
            case 'primary':
                return globalStyles.primaryColor;
            case 'secondary':
                return globalStyles.secondaryColor;
            default:
                return 'white'
        }
    })();

    const textColor = (() => {
        switch (backgroundColor) {
            case 'primary':
                return 'black';
            case 'secondary':
                return 'white';
            default:
                return 'black'
        }
    })();

    return (
        <Card sx={{...styles.headerSectionButtonCard, backgroundColor: buttonColor}}>
            <Link to={'/onboarding-choice'}
                  style={{textDecoration: 'none', color: "black", width: '100%'}}>
                <CardContent sx={styles.headerSectionButtonCardContent}>
                    <HStack gap={1} alignItems={'center'}>
                        <Typography sx={{...styles.headerSectionButtonCardText, color: textColor}}>
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
        fontSize: '20px',
        fontWeight: 'bold',
    },
}

export default LandingPageWAppButton;
