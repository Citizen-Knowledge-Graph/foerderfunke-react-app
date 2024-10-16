import React from 'react';
import {Box} from '@mui/material';

const VStack = ({
                    children,
                    gap = 2,
                    justifyContent = 'flex-start',
                    alignItems = null,
                    sx = {},
                    ...props
                }) => {
    return (
        <Box display="flex"
             flexDirection="column"
             boxSizing="border-box"
             gap={gap}
             justifyContent={justifyContent}
             alignItems={alignItems}
             sx={sx} {...props}>
            {children}
        </Box>
    );
};

export default VStack;
