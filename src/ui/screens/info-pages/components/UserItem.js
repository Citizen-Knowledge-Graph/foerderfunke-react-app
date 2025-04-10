import React from "react";
import { Typography } from "@mui/material";
import { VBox, HBox } from "@/ui/shared-components/LayoutBoxes";
import theme from "@/theme";
import RegularButton from "@/ui/shared-components/RegularButton";
import { IconButton } from "@mui/material";
import DeleteIcon from '@mui/icons-material/Delete';
import FileDownloadIcon from '@mui/icons-material/FileDownload';


const UserItem = ({ t, user, continueWithExisting, deleteExistingProfile, exportProfile }) => {
    return (
        <HBox sx={{
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
                    <HBox alignItems={'center'} justifyContent={'flex-end'} sx={{ flexWrap : 'wrap' }}>
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
                            onClick={() => exportProfile(user.id)}
                        >
                            <FileDownloadIcon sx={{ fontSize: '20px'}} />
                        </IconButton>
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
                            onClick={() => deleteExistingProfile(user.id)}
                        >
                            <DeleteIcon sx={{ fontSize: '20px'}} />
                        </IconButton>
                        <RegularButton
                            variant={'yellowContained'}
                            onClick={() => continueWithExisting(user.id)}
                            text={'app.welcomeBack.continueBtn'}
                            link={'/onboarding-choice'}
                        />
                    </HBox>
                </HBox>
            </VBox>
        </HBox>
    );
}
export default UserItem;