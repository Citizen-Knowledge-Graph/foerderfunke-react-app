import React from 'react';
import VStack from "../../../components/VStack";
import HStack from "../../../components/HStack";
import {ButtonBase, Card, CardContent, Typography} from "@mui/material";
import {Link} from "react-router-dom";
import {green, yellow} from "@mui/material/colors";

const ProfileSectionCompleted = () => {
    return (
        <VStack justifyContent={'center'} gap={3}>
            <HStack justifyContent={'center'} sx={{width: "100%"}}>
                <VStack gap={1} alignItems={'center'}>
                    <Typography variant="h4">Your quick check profile is ready</Typography>
                </VStack>
            </HStack>
            <VStack data-testid="button-card-container">
                <Card sx={styles.buttonCardComplete} data-testid="button-card">
                    <CardContent sx={styles.buttonCardContent} data-testid="card-content">
                        <HStack justifyContent={'center'}>
                            <ButtonBase component={Link} to={`/eligibility-overview`}>
                                <Typography variant="h6" gutterBottom sx={styles.buttonCardText}>
                                    Zu deinen Benefits!
                                </Typography>
                            </ButtonBase>
                        </HStack>
                    </CardContent>
                </Card>
            </VStack>
        </VStack>);
};

const styles = {
    buttonCard: {
        display: 'flex',
        flexDirection: 'column',
        backgroundColor: yellow[600],
        borderRadius: '15px',
        boxShadow: 'none',
    },
    buttonCardComplete: {
        display: 'flex',
        flexDirection: 'column',
        backgroundColor: green[600],
        borderRadius: '15px',
        boxShadow: 'none',
    },
    buttonCardContent: {
        padding: '16px',
        "&:last-child": {
            paddingBottom: '16px',
        }
    },
    buttonCardText: {
        color: 'white',
        fontWeight: '500',
        textAlign: 'center',
        margin: '0',
    },
    icon: {
        width: '30px',
        height: '30px',
    },
    buttonNext: {
        backgroundColor: green[500],
        fontWeight: 'bold',
        margin: '0px',
        '&:focus': {
            backgroundColor: green[500],
        },
    },
};

export default ProfileSectionCompleted;
