import React from 'react';
import { Typography } from '@mui/material';
import Layout from '@/ui/shared-components/Layout';
import AppScreenWrapperContainer from "@/ui/shared-components/app-screen-wrapper/AppScreenWrapperContainer";
import useTranslation from "@/ui/language/useTranslation";
import RegularButton from '@/ui/shared-components/buttons/RegularButton';
import TileButton from '@/ui/shared-components/buttons/TileButton';
import { HBox, VBox } from '@/ui/shared-components/LayoutBoxes';
import { useSelectedBenefitsStore } from "@/ui/storage/zustand";

const OnboardingChoice = () => {
    const { t } = useTranslation();
    const clearSelectedBenefits = useSelectedBenefitsStore((state) => state.clear);

    return (
        <Layout isApp={true}>
            <AppScreenWrapperContainer backTarget={'/user-routing'}>
                <VBox sx={{ gap: { xs: 4, md: 8, maxWidth: '800px' } }}>
                    <HBox>
                        <Typography variant="h1">
                            {t('app.discoverChoice.header')}
                        </Typography>
                    </HBox>
                    <VBox sx={{ gap: 4 }}>
                        <HBox>
                            <Typography variant="body1">
                                {t('app.discoverChoice.text')}
                            </Typography>
                        </HBox>
                        <HBox sx={{ maxWidth: '506px' }}>
                            <TileButton
                                variant={'whiteNoBorderYellow'}
                                title={'app.discoverChoice.quickCheck'}
                                subtitle='app.discoverChoice.quickCheckComment'
                                link={"/onboarding-welcome-topics"}
                                onClick={clearSelectedBenefits}
                            />
                        </HBox>
                    </VBox>
                    <VBox sx={{ gap: 2, maxWidth: '506px' }}>
                        <Typography variant="h4">
                        {t('app.discoverChoice.browseHeader')}
                        </Typography>
                        <Typography variant="body2">
                            {t('app.discoverChoice.browseInfo')}
                        </Typography>
                        <RegularButton
                            variant={'blackOutlined'}
                            text={'app.discoverChoice.browseAll'}
                            link={"/eligibility-overview"}
                            size='small'
                        />
                    </VBox>
                </VBox>
            </AppScreenWrapperContainer>
        </Layout >
    );
};

export default OnboardingChoice;
