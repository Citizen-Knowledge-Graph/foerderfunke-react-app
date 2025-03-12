import React from 'react';
import globalStyles from "../../../styles/styles";
import { VBox, HBox } from "../../../shared-components/LayoutBoxes";
import { Button, Typography } from "@mui/material";
import useUserProfileData from "../hooks/useUserProfileData";
import { Link } from "react-router-dom";
import useTranslation from "../../../language/useTranslation";
import theme from "../../../../theme";

const ProfileDataList = () => {
    const { t } = useTranslation();
    const userProfileData = useUserProfileData();

    return (
        <VBox sx={{ gap: theme.spacing(8) }}>
            {
                userProfileData.length > 0 ? (
                    <VBox sx={{ gap: theme.spacing(2) }}>
                        {
                            userProfileData.map(({ label, value }, index) => (
                                <VBox
                                    key={index}
                                    gap={0}
                                    sx={{
                                        padding: '32px',
                                        borderRadius: theme.shape.borderRadius,
                                        backgroundColor: theme.palette.white.main,
                                    }}
                                    justifyContent={'center'}
                                >
                                    <Typography variant='body2'>
                                        {label}
                                    </Typography>
                                    <Typography variant='h5' sx={{ fontWeight: '400' }}>
                                        {value}
                                    </Typography>
                                </VBox>
                            ))}
                    </VBox>) : (
                    <VBox sx={styles.restartBox}>
                        <Typography variant='body1'>
                            {t('app.profile.noInfoYet')}
                        </Typography>
                    </VBox>)
            }
            <HBox sx={{ gap: theme.spacing(4) }}>
                <Typography>
                    {t('app.qsComplete.hint')}
                </Typography>
                <HBox>
                    <Button
                        sx={{
                            padding: "16px 28px",
                            backgroundColor: theme.palette.black.light,
                            color: theme.palette.white.main,
                        }}
                        component={Link}
                        to='/user-routing'
                    >
                        <Typography variant="body1" sx={{ color: 'inherit', whiteSpace: 'nowrap' }}>
                            {t('app.qsComplete.restartBtn')}
                        </Typography>
                    </Button>
                </HBox>

            </HBox>
        </VBox>
    );
};




const styles = {
    restartBox: {
        padding: '16px',
        width: '100%',
        backgroundColor: 'white',
        borderRadius: '12px',
        borderWidth: '1px',
        borderColor: globalStyles.colorLightGrey,
    },
    dataBox: {
        padding: '12px',
        borderRadius: '12px'
    },
    labelText: {
        fontWeight: '300',
        fontSize: '14px',
        color: globalStyles.colorDarkGrey
    },
    valueText: {
        fontSize: '16px'
    }
};

export default ProfileDataList;

