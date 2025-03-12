import React from 'react';
import { AccessTime as AccessTimeIcon } from '@mui/icons-material';
import { Typography } from '@mui/material';
import { HBox } from "../../../shared-components/LayoutBoxes";
import theme from "../../../../theme";

const TimeIcon = () => {

    return (
        <HBox>
            <HBox sx={{
                alignItems: 'center',
                gap: theme.spacing(1),
                padding: theme.spacing(0.5)
            }}>
                <AccessTimeIcon sx={{ fontSize: "20px", color: theme.palette.blue.main }} />
                <Typography variant="body1" sx={{ color: theme.palette.blue.main }}>
                    5 Min.
                </Typography>
            </HBox>
        </HBox>)
};

export default TimeIcon;
