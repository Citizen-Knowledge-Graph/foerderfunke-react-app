import React, {useState} from 'react';
import VStack from "../../../shared-components/VStack";
import HStack from "../../../shared-components/HStack";
import {Typography} from "@mui/material";
import globalStyles from "../../../styles/styles";
import CloseIcon from "@mui/icons-material/Close";
import InfoIcon from "@mui/icons-material/Info";
import useTranslation from "../../../language/useTranslation";

const ProfileSectionQuestionsCount = ({stepsBackwardsFromStackFront, stack, profileQuestions}) => {
    const { t } = useTranslation();

    const [isVisible, setIsVisible] = useState(false);

    const questionsAnswered = stack.length - stepsBackwardsFromStackFront;
    const questionsLeft = stack.length + profileQuestions.fields.length

    return (
        <VStack>
            {
                isVisible && (
                    <VStack>
                        <HStack>
                            <HStack justifyContent={'space-between'} sx={styles.updateInfoBox}>
                                <Typography sx={styles.updateInfoText}>
                                    {t('app.questions.info')}
                                </Typography>
                                <CloseIcon
                                    sx={{fontSize: '20px', color: 'black', cursor: 'pointer'}}
                                    onClick={() => setIsVisible(false)}
                                /> </HStack>
                        </HStack>
                    </VStack>
                )
            }
            <VStack>
                <HStack>
                    <HStack sx={styles.questionBox} alignItems={'center'}>
                        <Typography sx={styles.questionText}>
                            {t('app.questions.progress')}: {questionsAnswered} / {questionsLeft}
                        </Typography>
                        <InfoIcon
                            sx={{fontSize: '20px', color: globalStyles.colorLightGrey, cursor: 'pointer'}}
                            onClick={() => setIsVisible(true)}
                        />
                    </HStack>
                </HStack>
            </VStack>
        </VStack>
    );
};

const styles = {
    updateInfoBox: {
        padding: '12px',
        borderRadius: '12px',
        backgroundColor: globalStyles.colorLightGrey,
    },
    updateInfoText: {
        fontSize: '12px'
    },
    questionBox: {
        padding: '12px',
        borderRadius: '12px',
    },
    questionText: {
        fontSize: '12px'
    }
};

export default ProfileSectionQuestionsCount;
