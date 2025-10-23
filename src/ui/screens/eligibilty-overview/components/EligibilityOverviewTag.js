
import React from 'react';
import { Typography } from '@mui/material';
import { HBox } from '@/ui/shared-components/LayoutBoxes';
import theme from '@/theme';

const EligibilityOverTag = ({ tag, isDesktop }) => {

    return (
        <HBox sx={{
            backgroundColor: 'greyTransparent.main',
            padding: '6px 18px',
            borderRadius: theme.shape.borderRadius,
        }}>
            <Typography variant={isDesktop ? 'body1' : 'body2'}>
                {tag}
            </Typography>
        </HBox>
    );
}

export default EligibilityOverTag;
