import React from 'react';
import StarBorderIcon from '@mui/icons-material/StarBorder';
import { Typography } from '@mui/material';
import { HBox } from "../../../shared-components/LayoutBoxes";
import theme from "../../../../theme";

const BenefitsIcon = ({numberOfBenefits}) => {

    return (
        <HBox>
            <HBox sx={{
                alignItems: 'center',
                gap: theme.spacing(1),
                padding: theme.spacing(0.5),
                borderStyle: 'solid',
                borderWidth: '1px',
                borderColor: theme.palette.primary.main,
                borderRadius: theme.shape.borderRadius,
            }}>
                <StarBorderIcon sx={{ fontSize: "20px", color: theme.palette.primary.main }} />
                <Typography variant="body2">
                    Based on {numberOfBenefits} benefts
                </Typography>
            </HBox>
        </HBox>)
};

export default BenefitsIcon;
