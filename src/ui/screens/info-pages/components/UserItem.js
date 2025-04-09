import React, { useState } from "react";
import { Typography, Button } from "@mui/material";
import { VBox, HBox } from "@/ui/shared-components/LayoutBoxes";
import theme from "@/theme";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import RegularButton from "@/ui/shared-components/RegularButton";
import { IconButton } from "@mui/material";


const UserItem = ({ t, index, user, continueWithExisting, deleteExistingProfile, exportProfile }) => {
    const [isVisible, setIsVisible] = useState(false);

    return (
        <HBox key={index} sx={{
            maxWidth: '800px',
            padding: '32px 32px',
            borderRadius: theme.shape.borderRadius,
            backgroundColor: 'white.main',
        }}>
            <VBox sx={{ gap: 4, width: '100%' }}>
                <HBox sx={{ gap: 4, alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap' }}>
                    <VBox sx={{ gap: 1 }}>
                        <Typography variant="h6">{user.id}</Typography>
                        <Typography variant="body2">{user.type}</Typography>
                    </VBox>
                    <HBox alignItems={'center'} justifyContent={'flex-end'}>
                        <RegularButton
                            variant={'yellowContained'}
                            onClick={continueWithExisting}
                            text={'app.welcomeBack.continueBtn'}
                            link={'/onboarding-choice'}
                        />
                        <IconButton
                            aria-label="more options"
                            sx={{
                                padding: '8px',
                                color: 'blue.main',
                                '&:hover': {
                                    backgroundColor: 'transparent',
                                    color: 'black.main',
                                },
                            }}
                            onClick={() => setIsVisible(!isVisible)}
                        >
                            <MoreVertIcon />
                        </IconButton>
                    </HBox>
                </HBox>
                {
                    isVisible && (
                        <HBox alignItems={'center'} justifyContent={'flex-end'}>
                            <Button
                                variant="text"
                                onClick={exportProfile}
                                sx={{
                                    color: 'blue.main',
                                    padding: '0',
                                    '&:hover': {
                                        backgroundColor: 'transparent',
                                        color: 'black.main',
                                    },
                                    '&:focus': {
                                        backgroundColor: 'transparent',
                                        color: 'black.main',
                                    }
                                }}
                            >
                                <Typography variant="body2" sx={{ color: 'inherit' }}>
                                    {t("app.welcomeBack.exportBtn")}
                                </Typography>
                            </Button>
                            <Button
                                variant="text"
                                onClick={deleteExistingProfile}
                                sx={{
                                    padding: '0',
                                    color: 'blue.main',
                                    '&:hover': {
                                        backgroundColor: 'transparent',
                                        color: 'black.main',
                                    },
                                    '&:focus': {
                                        backgroundColor: 'transparent',
                                        color: 'black.main',
                                    }
                                }}>
                                <Typography variant="body2" sx={{ color: 'inherit' }}>
                                    {t("app.welcomeBack.deleteBtn")}
                                </Typography>
                            </Button>
                        </HBox>
                    )
                }
            </VBox>
        </HBox>
    );
}
export default UserItem;