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
                padding: theme.spacing(0.5),
                borderStyle: 'solid',
                borderWidth: '1px',
                borderColor: theme.palette.secondary.main,
                borderRadius: theme.shape.borderRadius,
            }}>
                <AccessTimeIcon sx={{ fontSize: "20px", color: theme.palette.secondary.main }} />
                <Typography variant="body2">
                    5 Min.
                </Typography>
            </HBox>
        </HBox>)
};

export default TimeIcon;
