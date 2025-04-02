import React from 'react';
import { Link } from "react-router-dom";
import { Typography, Button } from "@mui/material";
import ProfileDataList from "@/ui/screens/profile-screen/components/ProfileDataList";
import useTranslation from "@/ui/language/useTranslation";
import { VBox, HBox } from "@/ui/shared-components/LayoutBoxes";
import Layout from "@/ui/shared-components/Layout";
import AppScreenWrapper from "@/ui/shared-components/AppScreenWrapper";
import { useStore } from "@/ui/shared-components/ViewportUpdater";

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
                    <HBox>
                        <Button
                            sx={{
                                padding: '16px 28px',
                                backgroundColor: 'blue.dark',
                                color: 'white.main',
                            }}
                            variant='contained'
                            component={Link}
                            to={`/eligibility-overview`}
                        >
                            <Typography variant="body1" sx={{ color: 'inherit' }}>
                                {t('app.qsComplete.discoverBtn')}
                            </Typography>
                        </Button>
                    </HBox>
                </VBox>
            </AppScreenWrapper>
        </Layout>
    );
};

export default QuestionPageCompleted;
