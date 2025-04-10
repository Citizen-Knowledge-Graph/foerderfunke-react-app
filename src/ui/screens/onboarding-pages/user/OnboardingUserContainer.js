import React, { useState } from 'react';
import { Typography, TextField } from "@mui/material";
import Layout from "@/ui/shared-components/Layout";
import AppScreenWrapper from "@/ui/shared-components/AppScreenWrapper";
import { VBox } from "@/ui/shared-components/LayoutBoxes";
import RegularButton from '@/ui/shared-components/RegularButton';
import useInitialiseNewUser from '@/ui/shared-hooks/useInitialiseNewUser';

const OnboardingUser = () => {
    const [userId, setUserId] = useState('');
    const userType = 'Citizen'; // This is hardcoded for now, but it should be dynamic based on the user type
    const { initialiseNewUser, error } = useInitialiseNewUser();

    return (
        <Layout isApp={true} logo={false}>
            <AppScreenWrapper isLoading={false} home={true}>
                <VBox sx={{
                    gap: {
                        xs: 4,
                        md: 8
                    }
                }}>
                    <Typography variant='h1' >User Creation</Typography>
                    <Typography variant='body1'>
                        Bitte gib deinem Profil einen Namen.
                        Das Profil wird in deinem lokalen Browser hinterlegt.
                        Du kannst es weiternutzen, wenn du zu einem späteren Zeitpunkt zurückkehrst
                    </Typography>
                    <VBox>
                        <TextField
                            variant="filled"
                            InputProps={{
                                disableUnderline: true,
                            }}
                            label="Profilname"
                            placeholder="Profilname"
                            sx={{
                                width: { xs: '100%', md: '400px' },
                                "& .MuiFilledInput-root": {
                                    backgroundColor: "white.main"
                                }
                            }}
                            value={userId}
                            onChange={(e) => setUserId(e.target.value)}
                        />
                        {error ? (
                            <Typography variant="body1" color="error">
                                {error}
                            </Typography>
                        ) : null}
                    </VBox>
                    <RegularButton
                        variant={'blueContained'}
                        text={'app.welcomeBack.createNewBtn'}
                        onClick={() => initialiseNewUser(userId, userType)}
                        link={'/onboarding-choice'}
                    />
                </VBox>
            </AppScreenWrapper>
        </Layout>
    );
}
export default OnboardingUser;