import { Box } from '@mui/material';
import { styled } from '@mui/system';

export const HBox = styled(Box)(({ theme, gap = 2 }) => ({
    display: 'flex',
    flexDirection: 'row',
    gap: theme.spacing(gap),
}));

export const VBox = styled(Box)(({ theme, gap = 1 }) => ({
    display: 'flex',
    flexDirection: 'column',
    gap: theme.spacing(gap),
}));
