import React from 'react';
import {Box} from '@mui/material';

const VStack = ({ children, gap = 2, sx = {}, ...props }) => {
    return (
        <Box display="flex" flexDirection="column" gap={gap} sx={sx} {...props}>
            {children}
        </Box>
    );
};

export default VStack;
