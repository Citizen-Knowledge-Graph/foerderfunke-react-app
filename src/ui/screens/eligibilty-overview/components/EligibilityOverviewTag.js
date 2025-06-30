import React from 'react';
import { Typography } from '@mui/material';
import { HBox } from '@/ui/shared-components/LayoutBoxes';
import theme from '@/theme';

const EligibilityOverTag = ({ tag, tagType }) => {

    let tagStyle;
    switch (tagType) {
        case 'administrativeLevel':
            tagStyle = theme.palette.green.main ;
            break;
        case 'associatedLaw':
            tagStyle = theme.palette.pink.main;
            break;
        case 'providingAgency':
            tagStyle = theme.palette.black.light ;
            break;
        case 'benefitCategory':
            tagStyle = theme.palette.blue.main;
            break;
        default:
            tagStyle = theme.palette.black.main;
    }

    return (
        <HBox sx={{
            border: `1px solid ${tagStyle}`,
            padding: '6px 10px',
            borderRadius: theme.shape.borderRadius,
        }}>
            <Typography variant='body2' sx={{}}>
                {tag}
            </Typography>
        </HBox>
    );
}

export default EligibilityOverTag;
