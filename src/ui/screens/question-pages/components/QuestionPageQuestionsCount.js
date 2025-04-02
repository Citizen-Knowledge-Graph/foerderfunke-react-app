import React, { useState } from 'react';
import { Typography } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import InfoIcon from "@mui/icons-material/Info";
import { HBox, VBox } from "../../../shared-components/LayoutBoxes";
import QuestionPageBackButton from "./QuestionPageBackButton";

const QuestionPageQuestionsCount = ({ t, handleBackClick, questionsCount }) => {
    const [isVisible, setIsVisible] = useState(false);

    return (
        <VBox sx={{ gap: 0 }}>
            <HBox sx={{ justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap' }}>
                {questionsCount[0] > 1 ?
                    <QuestionPageBackButton handleBack={handleBackClick} /> : <div />}
                <HBox sx={{ alignItems: 'center', padding: '8px', }}>
                    <Typography variant="body2" sx={{ color: 'black.light' }}>
                        {t('app.questions.progress')}: {questionsCount[0]} / {questionsCount[1]}
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
                    <HBox sx={{ justifyContent: 'flex-end', gap: 1, alignItems: 'center' }}>
                        <Typography variant="body2" sx={{ color: 'black.light' }}>
                            {t('app.questions.info')}
                        </Typography>
                    </HBox>
                )
            }
        </VBox>
    );
};

export default QuestionPageQuestionsCount;
