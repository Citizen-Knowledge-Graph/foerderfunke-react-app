import React, { useState } from 'react';
import { Typography } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import InfoIcon from "@mui/icons-material/Info";
import useTranslation from "../../../language/useTranslation";
import { HBox, VBox } from "../../../shared-components/LayoutBoxes";
import theme from "../../../../theme";
import ProfileSectionBackButton from "./ProfileSectionBackButton";

const ProfileSectionQuestionsCount = ({ handleBack, stepsBackwardsFromStackFront, stack, profileQuestions }) => {
    const { t } = useTranslation();
    const [isVisible, setIsVisible] = useState(false);

    const questionsAnswered = stack.length - stepsBackwardsFromStackFront;
    const questionsLeft = stack.length + profileQuestions.fields.length

    return (
        <VBox sx={{ gap: theme.spacing(0) }}>
            <HBox sx={{ justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap' }}>
                {questionsAnswered > 1 ?
                    <ProfileSectionBackButton handleBack={handleBack} /> : <div />}
                <HBox sx={{ alignItems: 'center', padding: '8px', }}>
                    <Typography variant="body2" sx={{ color: 'black.light' }}>
                        {t('app.questions.progress')}: {questionsAnswered} / {questionsLeft}
                    </Typography>
                    {
                        isVisible ? (
                            <CloseIcon
                                sx={{ fontSize: '20px', color: 'black.light', cursor: 'pointer' }}
                                onClick={() => setIsVisible(isVisible => !isVisible)}
                            />
                        ) : (
                            <InfoIcon
                                sx={{ fontSize: '20px', color: 'black.light', cursor: 'pointer' }}
                                onClick={() => setIsVisible(isVisible => !isVisible)}
                            />
                        )
                    }
                </HBox>
            </HBox>
            {
                isVisible && (
                    <HBox sx={{ justifyContent: 'flex-end', gap: theme.spacing(1), alignItems: 'center' }}>
                        <Typography variant="body2" sx={{ color: 'black.light' }}>
                            {t('app.questions.info')}
                        </Typography>
                    </HBox>
                )
            }
        </VBox>
    );
};

export default ProfileSectionQuestionsCount;
