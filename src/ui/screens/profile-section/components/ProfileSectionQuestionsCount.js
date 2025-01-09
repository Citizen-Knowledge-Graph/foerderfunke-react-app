import React, { useState } from 'react';
import { Typography } from "@mui/material";
import globalStyles from "../../../styles/styles";
import CloseIcon from "@mui/icons-material/Close";
import InfoIcon from "@mui/icons-material/Info";
import useTranslation from "../../../language/useTranslation";
import { HBox, VBox } from "../../../shared-components/LayoutBoxes";
import theme from "../../../../theme";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import Button from "@mui/material/Button";
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
                    <Button
                        sx={{
                            color: "black",
                            '&:hover': {
                                backgroundColor: theme.palette.custom.lightGrey,
                                '@media (hover: none)': {
                                    backgroundColor: 'transparent',
                                },
                            },
                        }}
                        startIcon={<ChevronLeftIcon data-testid="chevron-left-icon" />}
                        onClick={handleBack}
                    >
                        {t('app.nav.previousQuestion')}
                    </Button> : <div />}
                <VBox sx={{ alignItems: 'flex-end' }}>
                    <HBox sx={{ alignItems: 'center' }}>
                        <Typography variant="body2">
                            {t('app.questions.progress')}: {questionsAnswered} / {questionsLeft}
                        </Typography>
                        <InfoIcon
                            sx={{ fontSize: '20px', color: globalStyles.colorLightGrey, cursor: 'pointer' }}
                            onClick={() => setIsVisible(isVisible => !isVisible)}
                        />
                    </HBox>

                </VBox>
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
