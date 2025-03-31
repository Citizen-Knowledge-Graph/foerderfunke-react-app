import React from 'react';
import { Button, Checkbox, FormControlLabel, Typography, Box } from '@mui/material';
import { Link } from "react-router-dom";
import Layout from "../../../shared-components/Layout";
import AppScreenWrapper from "@/ui/shared-components/AppScreenWrapper";
import { VBox, HBox } from "@/ui/shared-components/LayoutBoxes";
import TimeIcon from '../components/TimeIcon';
import ClickableTopicBox from "../components/ClickableTopicBox";

const OnboardingWelcomeTopics = ({
    t,
    socialBenefitTopics,
    businessTopics,
    onTopicClick,
    onSelectAll,
    onConfirm
}) => {

    return (
        <Layout isApp={true} logo={false}>
            <AppScreenWrapper back={true}>
                <VBox sx={{ gap: { xs: 4, md: 8 } }}>
                    <VBox>
                        <Typography variant="h1">
                            {t('app.topicSelection.header')}
                        </Typography>
                        <TimeIcon />
                    </VBox>
                    <VBox sx={{ gap: 4 }}>
                        <VBox sx={{ maxWidth: '800px' }}>
                            <Typography variant="h2" sx={{ color: 'pink.main', fontWeight: '500' }}>
                                {t('app.topicSelection.socialBenefitsTitle')}
                            </Typography>
                            <Typography variant="body1">
                                {t('app.topicSelection.socialBenefitsSubtitle')}
                            </Typography>
                        </VBox>
                        <VBox sx={{ gap: 2 }}>
                            {socialBenefitTopics.length > 0 && (
                                <HBox sx={{ flexWrap: 'wrap' }}>
                                    {socialBenefitTopics.map((topic, index) => (
                                        <ClickableTopicBox
                                            key={index}
                                            topic={topic}
                                            onClick={onTopicClick}
                                        />
                                    ))}
                                </HBox>
                            )}
                        </VBox>
                        <Box>
                            <FormControlLabel sx={{ margin: 0 }}
                                control={
                                <Checkbox 
                                    checked={socialBenefitTopics.length > 0 && socialBenefitTopics.every(t => t.isSelected)}
                                    onChange={(e) => onSelectAll(e, 'social_benefits')} />}
                                label={t('app.topicSelection.selectAll')}
                            />
                        </Box>
                    </VBox>
                    <VBox sx={{ gap: 4 }}>
                        <VBox sx={{ maxWidth: '800px' }}>
                            <Typography variant="h2" sx={{ color: 'pink.main', fontWeight: '500' }}>
                                {t('app.topicSelection.businessTitle')}
                            </Typography>
                            <Typography variant="body1">
                                {t('app.topicSelection.businessSubtitle')}
                            </Typography>
                        </VBox>
                        <VBox sx={{ gap: 4 }}>
                            {businessTopics.length > 0 && (
                                <HBox sx={{ flexWrap: 'wrap' }}>
                                    {businessTopics.map((topic, index) => (
                                        <ClickableTopicBox
                                            key={index}
                                            topic={topic}
                                            onClick={onTopicClick}
                                        />
                                    ))}
                                </HBox>
                            )}
                        </VBox>
                        <Box>
                            <FormControlLabel sx={{ margin: 0 }}
                                control={<Checkbox onChange={(e) => onSelectAll(e, 'business')} />}
                                label={t('app.topicSelection.selectAll')}
                            />
                        </Box>
                    </VBox>
                    <HBox>
                        <Button
                            sx={{
                                padding: "16px 28px",
                                backgroundColor: 'blue.dark',
                                color: 'white.main',
                            }}
                            variant="contained"
                            onClick={onConfirm}
                            component={Link}
                            to={'/onboarding-welcome'}>
                            <Typography variant="body1" sx={{ color: 'inherit' }}>
                                {t('app.topicSelection.confirmBtn')}
                            </Typography>
                        </Button>
                    </HBox>
                </VBox>
            </AppScreenWrapper>
        </Layout >
    );
}

export default OnboardingWelcomeTopics;
