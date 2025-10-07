
import React from 'react';
import { Typography } from '@mui/material';
import { HBox } from '@/ui/shared-components/LayoutBoxes';
import theme from '@/theme';

const EligibilityOverTag = ({ tag, isDesktop }) => {
    const textSize = isDesktop ? 'body1' : 'body2';

    return (
        <HBox sx={{
            backgroundColor: 'greyTransparent.main',
            padding: '6px 18px',
            borderRadius: theme.shape.borderRadius,
        }}>
            <Typography variant={textSize}>
                {tag}
            </Typography>
        </HBox>
    );
}

export default EligibilityOverTag;
