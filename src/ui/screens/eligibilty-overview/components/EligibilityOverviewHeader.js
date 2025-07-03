import React from 'react';
import { Typography } from '@mui/material';
import { VBox } from "@/ui/shared-components/LayoutBoxes";
import useTranslation from "@/ui/language/useTranslation";
import RegularButton from '@/ui/shared-components/buttons/RegularButton';

const EligibilityOverviewHeader = () => {
    const { t } = useTranslation();

    return (
        <VBox sx={{ width: "100%", alignItems: "flex-start", gap: { xs: 4, md: 8 } }}>
            <VBox>
                <Typography variant="h1">
                    {t('app.browseAll.header')}
                </Typography>
                <RegularButton
                        variant={'blueHollow'}
                        text={'app.browseAll.profileBtn'}
                        link={'/profile-overview'}
                        size='small'
                    />
            </VBox>
            <VBox sx={{ maxWidth: '800px' }}>
                <Typography variant='h2'>
                    {t('app.browseAll.disclaimerTitle')}
                </Typography>
                <Typography variant='body1'>
                {t('app.browseAll.disclaimerText')}
                </Typography>
            </VBox>
        </VBox>
    );
};

export default EligibilityOverviewHeader;
