import React, { useState } from 'react';
import { Typography, IconButton, Collapse } from '@mui/material';
import { HBox, VBox } from '../../../shared-components/LayoutBoxes';
import theme from '../../../../theme';
import DeleteIcon from '@mui/icons-material/Delete';
import FileDownloadIcon from '@mui/icons-material/FileDownload';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import MoreVertIcon from '@mui/icons-material/MoreVert'; // Three dots icon

const UserListEntry = ({ userId, index }) => {
    const [open, setOpen] = useState(false); // State for collapse

    return (
        <HBox key={index} sx={{
            alignItems: 'center',
            justifyContent: 'space-between',
            backgroundColor: theme.palette.yellow.main,
            padding: `${theme.spacing(2)} ${theme.spacing(4)}`,
            borderRadius: theme.shape.borderRadius,
            flexWrap: 'wrap',
        }}>
            {/* User Information */}
            <VBox sx={{ alignItems: 'flex-start' }}>
                <Typography variant="h6">{userId}</Typography>
                <Typography variant="body1" sx={{ textAlign: 'left' }}>
                    Company Profile
                </Typography>
            </VBox>
            <HBox sx={{ flexWrap: 'wrap', alignItems: 'center', justifyContent: 'space-between' }}>
                <HBox sx={{
                    alignItems: 'center',
                    border: `1px solid ${theme.palette.custom.darkGrey}`,
                    padding: `${theme.spacing(1)} ${theme.spacing(2)}`,
                    borderRadius: theme.shape.borderRadius,
                    '&:hover': {
                        backgroundColor: theme.palette.black.main,
                        color: theme.palette.common.white,
                    },
                }}>
                    <Typography variant="body2" sx={{ color: 'inherit' }}>Continue</Typography>
                    <ArrowForwardIcon sx={{ color: 'inherit' }} />
                </HBox> 
                <Collapse in={open} timeout="auto" unmountOnExit>
                    <HBox sx={{ gap: theme.spacing(0.5), marginTop: theme.spacing(1) }}>
                        <HBox sx={{
                            gap: theme.spacing(1),
                            alignItems: 'center',
                            padding: `${theme.spacing(1)} ${theme.spacing(2)}`,
                            borderRadius: theme.shape.borderRadius,
                            '&:hover': {
                                backgroundColor: theme.palette.yellow.light,
                                color: theme.palette.common.white,
                            },
                        }}>
                            <Typography variant="body2" sx={{ color: 'inherit' }}>Export</Typography>
                            <FileDownloadIcon sx={{ fontSize: '16px', color: 'inherit' }} />
                        </HBox>
                        <HBox sx={{
                            gap: theme.spacing(1),
                            alignItems: 'center',
                            padding: `${theme.spacing(1)} ${theme.spacing(2)}`,
                            borderRadius: theme.shape.borderRadius,
                            '&:hover': {
                                backgroundColor: theme.palette.yellow.light,
                                color: theme.palette.common.white,
                            },
                        }}>
                            <Typography variant="body2" sx={{ color: 'inherit' }}>Delete</Typography>
                            <DeleteIcon sx={{ fontSize: '16px', color: 'inherit' }} />
                        </HBox>
                    </HBox>
                </Collapse>
                <IconButton onClick={() => setOpen(!open)} sx={{ marginLeft: theme.spacing(1) }}>
                    <MoreVertIcon />
                </IconButton>
            </HBox>
        </HBox>
    );
};

export default UserListEntry;