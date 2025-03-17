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
            }}>
                <StarBorderIcon sx={{ fontSize: "20px", color: theme.palette.blue.main }} />
                <Typography variant="body1" sx={{ color: theme.palette.blue.main }}>
                    Based on {numberOfBenefits} benefts
                </Typography>
            </HBox>
        </HBox>)
};

export default BenefitsIcon;
