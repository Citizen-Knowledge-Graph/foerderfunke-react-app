import React from 'react';
import { Typography } from "@mui/material";
import ProfileDataList from "@/ui/screens/profile-screen/components/ProfileDataList";
import useTranslation from "@/ui/language/useTranslation";
import { VBox, HBox } from "@/ui/shared-components/LayoutBoxes";
import Layout from "@/ui/shared-components/Layout";
import AppScreenWrapper from "@/ui/shared-components/app-screen-wrapper/AppScreenWrapper";
import { useStore } from "@/ui/shared-components/ViewportUpdater";
import RegularButton from '@/ui/shared-components/RegularButton';

const QuestionPageCompleted = () => {
    const { t } = useTranslation();
    const isDesktop = useStore((state) => state.isDesktop);
    const privacyBox = `${process.env.PUBLIC_URL}/assets/images/application/quick-check-completed.svg`;

    return (
        <Layout isApp={true} logo={false}>
            <AppScreenWrapper back={true}>
                <VBox sx={{ gap: { xs: 4, md: 8 } }}>
                    {
                        !isDesktop && (
                            <HBox sx={{ justifyContent: 'center' }}>
                                <img src={privacyBox} alt="logo" style={{ width: "232px" }} />
                            </HBox>
                        )
                    }
                    <HBox sx={{ alignItems: 'center', flexWrap: 'wrap' }}>
                        <HBox sx={{ flex: 5 }}>
                            <Typography variant="h1">
                                {t('app.qsComplete.header')}
                            </Typography>
                        </HBox>
                        {
                            isDesktop && (
                                <HBox sx={{ flex: 1 }}>
                                    <img src={privacyBox} alt="logo" style={{ width: "232px" }} />
                                </HBox>
                            )
                        }
                    </HBox>
                    <ProfileDataList />
                    <RegularButton
                        variant="blueContained"
                        text={t('app.qsComplete.discoverBtn')}
                        link={'/eligibility-overview'}
                    />
                </VBox>
            </AppScreenWrapper>
        </Layout>
    );
};

export default QuestionPageCompleted;
