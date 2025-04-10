import React, { useState } from 'react';
import { Typography, TextField } from "@mui/material";
import Layout from "@/ui/shared-components/Layout";
import AppScreenWrapper from "@/ui/shared-components/AppScreenWrapper";
import { VBox } from "@/ui/shared-components/LayoutBoxes";
import RegularButton from '@/ui/shared-components/RegularButton';

const OnboardingUser = () => {
    const [value, setValue] = useState('');
    const error = null;

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
                            value={value}
                            onChange={(e) => setValue(e.target.value)}
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
                        onClick={() => console.log('Button clicked')}
                    />
                </VBox>
            </AppScreenWrapper>
        </Layout>
    );
}
export default OnboardingUser;