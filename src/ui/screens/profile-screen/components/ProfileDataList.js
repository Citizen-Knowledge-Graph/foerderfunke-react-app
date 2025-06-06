import React from 'react';
import { VBox, HBox } from "@/ui/shared-components/LayoutBoxes";
import { Typography } from "@mui/material";
import useTranslation from "@/ui/language/useTranslation";
import theme from "@/theme";
import RegularButton from '@/ui/shared-components/buttons/RegularButton';
import useUserProfileData from "../hooks/useUserProfileData";


const ProfileDataList = () => {
    const { t } = useTranslation();
    const userProfileData = useUserProfileData();

    return (
        <VBox sx={{ gap: 2 }}>
            {
                userProfileData.length > 0 ? (
                    <VBox sx={{ gap: 2 }}>
                        {
                            userProfileData.map(({ label, value }, index) => (
                                <VBox
                                    key={index}
                                    gap={0}
                                    sx={{
                                        padding: '32px',
                                        borderRadius: theme.shape.borderRadius,
                                        backgroundColor: 'white.main',
                                    }}
                                    justifyContent={'center'}
                                >
                                    <Typography variant='body2'>
                                        {label}
                                    </Typography>
                                    <Typography variant='h2' sx={{
                                        fontWeight: '500', wordWrap: "break-word",
                                    }}>
                                        {value}
                                    </Typography>
                                </VBox>
                            ))}
                    </VBox>) : (
                    <VBox>
                        <Typography variant='body1'>
                            {t('app.profile.noInfoYet')}
                        </Typography>
                    </VBox>)
            }
            <HBox sx={{ justifyContent: 'space-between', flexWrap: 'wrap' }}>
                <HBox sx={{ maxWidth: '800px' }}>
                    <Typography>
                        {t('app.qsComplete.hint')}
                    </Typography>
                </HBox>
                <RegularButton
                    variant='greyContained'
                    text={'app.qsComplete.restartBtn'}
                    link={'/user-routing'}
                />
            </HBox>
        </VBox>
    );
};

export default ProfileDataList;
