import React, { useEffect, useState } from 'react';
import { CircularProgress, Typography } from '@mui/material';
import { VBox, HBox } from './LayoutBoxes';
import useTranslation from '@/ui/language/useTranslation';

const Loading = ({message}) => {
    const { t } = useTranslation();
    const [dots, setDots] = useState('');

    useEffect(() => {
        const interval = setInterval(() => {
            setDots((prev) => (prev.length >= 3 ? '' : prev + '.'));
        }, 500);

        return () => clearInterval(interval);
    }, []);

    return (
        <VBox alignItems="center" justifyContent="center" sx={{ gap: 4, minHeight: '50vh' }}>
            <CircularProgress size={32} sx={{ color: 'pink.main' }} />
            <Typography variant="h2" sx={{ fontWeight: '400', display: 'flex', alignItems: 'center' }}>
                {t(message)}
                <HBox component="span" sx={{ display: 'inline-block', width: '1.5em', textAlign: 'left' }}>
                    {' '}{dots}
                </HBox>
            </Typography>
        </VBox>
    );
}

export default Loading;