import React, { useState } from 'react';
import { VBox, HBox } from "@/ui/shared-components/LayoutBoxes";
import { Typography } from "@mui/material";
import useTranslation from "@/ui/language/useTranslation";
import theme from "@/theme";
import RegularButton from '@/ui/shared-components/buttons/RegularButton';
import useUserProfileData from "../hooks/useUserProfileData";
import featureFlags from '@/featureFlags';
import useSetupProfileUpdate from '../hooks/useSetupProfileUpdate';
import ProfileUpdateField from './ProfileUpdateField';
import useUpdateDatafield from '../hooks/useUpdateDatafield';

const ProfileDataList = () => {
    const [updateDatafield, setUpdateDatafield] = useState(null);
    const [open, setOpen] = useState(null);
    const { t } = useTranslation();
    const userProfileData = useUserProfileData();
    const { datafieldDetails, currentValue, setCurrentValue } = useSetupProfileUpdate(updateDatafield);
    const handleUpdateClick = useUpdateDatafield(updateDatafield, datafieldDetails, setOpen);

    return (
        <VBox sx={{ gap: 2 }}>
            {
                userProfileData.length > 0 ? (
                    <VBox sx={{ gap: 2 }}>
                        {
                            userProfileData.map(({ id, label, value }, index) => (
                                <VBox
                                    key={index}
                                    gap={4}
                                    sx={{
                                        padding: 4,
                                        borderRadius: theme.shape.borderRadius,
                                        backgroundColor: 'white.main',
                                    }}
                                    justifyContent={'center'}
                                >
                                    <HBox sx={{
                                        justifyContent: 'space-between',
                                        alignItems: 'flex-start',
                                        flexWrap: 'wrap'
                                    }}>
                                        <VBox>
                                            <Typography variant='body2'>
                                                {label}
                                            </Typography>
                                            <Typography variant='h2' sx={{
                                                fontWeight: '500', wordWrap: "break-word",
                                            }}>
                                                {value}
                                            </Typography>
                                        </VBox>
                                        <VBox>
                                            {
                                                featureFlags.profileUpdates && (
                                                    <RegularButton
                                                        onClick={
                                                            () => {
                                                                setOpen(open === index ? null : index)
                                                                setUpdateDatafield(id)
                                                            }}
                                                        variant={'transparentPinkOutlined'}
                                                        text={'update'}
                                                        size={'xsmall'}
                                                    />
                                                )
                                            }

                                        </VBox>
                                    </HBox>
                                    {
                                        featureFlags.profileUpdates && open === index && datafieldDetails && (
                                            <ProfileUpdateField
                                                t={t}
                                                datafieldDetails={datafieldDetails}
                                                value={currentValue}
                                                setValue={setCurrentValue}
                                                error={null}
                                                handleAddClick={handleUpdateClick}
                                            />
                                        )
                                    }
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
