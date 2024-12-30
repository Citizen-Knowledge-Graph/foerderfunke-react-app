// src/components/WrapperBox.jsx
import React from 'react';
import { Box } from '@mui/material';
import { styled } from '@mui/system';

const ContentBoxStyled = styled(Box)(({ theme }) => ({
    backgroundColor: theme.palette.custom.lightGreyTransparent,
    borderRadius: theme.shape.borderRadius,
    padding: theme.spacing(2),
    boxSizing: 'border-box',
}));

const ContentBox = ({ children, sx, ...props }) => {
    return (
        <ContentBoxStyled sx={sx} {...props}>
            {children}
        </ContentBoxStyled>
    );
};

export default ContentBox;