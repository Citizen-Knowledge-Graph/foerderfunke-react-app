
import React from 'react';
import { Typography } from '@mui/material';
import { HBox } from '@/ui/shared-components/LayoutBoxes';
import theme from '@/theme';

const EligibilityOverTag = ({ tag, tagType }) => {

    let tagStyle;
    switch (tagType) {
        case 'administrativeLevels':
            tagStyle = theme.palette.green.main ;
            break;
        case 'associatedLaws':
            tagStyle = theme.palette.pink.main;
            break;
        case 'providingAgencies':
            tagStyle = theme.palette.red.main ;
            break;
        case 'benefitCategories':
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
