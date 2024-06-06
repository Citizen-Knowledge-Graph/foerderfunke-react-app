import React from 'react';
import {Card, CardContent, TextField, Typography} from '@mui/material';
import VStack from "../../../components/VStack";
import HStack from "../../../components/HStack";
import {yellow} from "@mui/material/colors";

const ProfileSectionList = ({profileSectionData}) => {

    return (
        <VStack sx={{width: '100%'}}>
            <VStack gap={1}>
                {
                    profileSectionData.fields.map((section) => {
                        return (
                            <VStack gap={1}>
                            <HStack>
                                <Card sx={styles.infoCard} data-testid="card">
                                    <CardContent sx={styles.infoCardContent} data-testid="card-content">
                                        <Typography variant="body1" gutterBottom sx={styles.titleText}>
                                            {section.title}
                                        </Typography>
                                    </CardContent>
                                </Card>
                            </HStack>
                                <TextField
                                    label="Username"
                                    variant="outlined"
                                    fullWidth
                                />
                            </VStack>
                        )
                    })
                }
            </VStack>
        </VStack>
    );
};

const styles = {
    titleText: {
        fontWeight: 'bold',
        margin: '0px'
    },
    infoCard: {
        width: '100%',
        borderRadius: '15px',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: yellow[200],
        boxShadow: 'none',
    },
    infoCardContent: {
        padding: '16px',
        "&:last-child": {
            paddingBottom: '16px',
        }
    },
};

export default ProfileSectionList;
