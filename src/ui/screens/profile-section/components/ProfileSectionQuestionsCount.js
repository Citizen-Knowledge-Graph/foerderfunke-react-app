import React, { useState } from 'react';
import { Typography } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import InfoIcon from "@mui/icons-material/Info";
import useTranslation from "../../../language/useTranslation";
import { HBox, VBox } from "../../../shared-components/LayoutBoxes";
import theme from "../../../../theme";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ContentBox from "../../../shared-components/ContentBox";

const ProfileSectionQuestionsCount = ({ handleBack, stepsBackwardsFromStackFront, stack, profileQuestions }) => {
    const { t } = useTranslation();

    const [isVisible, setIsVisible] = useState(false);

    const questionsAnswered = stack.length - stepsBackwardsFromStackFront;
    const questionsLeft = stack.length + profileQuestions.fields.length

    return (
        <VBox>
            <HBox sx={{ justifyContent: 'space-between', alignItems: 'center' }}>
                {questionsAnswered > 1 ?
                    <HBox
                        sx={{
                            alignItems: 'center',
                            padding: '8px 12px',
                            borderRadius: theme.shape.borderRadius,
                            color: theme.palette.black.light,
                            '&:hover': {
                                backgroundColor: theme.palette.custom.lightGrey,
                                color: theme.palette.black.main,
                                '@media (hover: none)': {
                                    backgroundColor: 'transparent',
                                },
                            },
                        }}
                        onClick={handleBack}
                    >
                        <ArrowBackIcon data-testid="chevron-left-icon" sx={{ fontSize: '16px' }} />
                        <Typography variant="body2" sx={{ color: 'inherit' }}>
                            {t('app.nav.previousQuestion')}
                        </Typography>
                    </HBox> : <div />}
                <HBox sx={{ alignItems: 'center', padding: '8px', }}>
                    <Typography variant="body2" sx={{ color: theme.palette.blue.main }}>
                        {t('app.questions.progress')}: {questionsAnswered} / {questionsLeft}
                    </Typography>
                    <InfoIcon
                        sx={{ fontSize: '20px', color: theme.palette.blue.main, cursor: 'pointer' }}
                        onClick={() => setIsVisible(isVisible => !isVisible)}
                    />
                </HBox>
            </HBox>
            {
                isVisible && (
                    <HBox sx={{ justifyContent: 'flex-end' }}>
                        <ContentBox sx={{ padding: theme.spacing(1), backgroundColor: theme.palette.custom.darkGreyTransparent }}>
                            <HBox sx={{ justifyContent: 'space-between' }}>
                                <Typography variant="body2">
                                    {t('app.questions.info')}
                                </Typography>
                                <CloseIcon
                                    sx={{ fontSize: '20px', color: 'black', cursor: 'pointer' }}
                                    onClick={() => setIsVisible(false)}
                                />
                            </HBox>
                        </ContentBox>
                    </HBox>
                )
            }
        </VBox>
    );
};

export default ProfileSectionQuestionsCount;
