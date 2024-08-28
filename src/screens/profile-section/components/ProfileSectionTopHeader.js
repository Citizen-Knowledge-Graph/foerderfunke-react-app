import React, {useState} from 'react';
import VStack from "../../../components/VStack";
//import {ValidationResult} from "@foerderfunke/matching-engine";
import HStack from "../../../components/HStack";
import {Typography} from "@mui/material";
import globalStyles from "../../../styles/styles";
import CloseIcon from "@mui/icons-material/Close";
import InfoIcon from "@mui/icons-material/Info";


const ProfileSectionTopHeader = ({stack, profileQuestions, validationReport}) => {
    const [isVisible, setIsVisible] = useState(true);

    const questionsAnswered = stack.length;
    const questionsLeft = stack.length + profileQuestions.fields.length
    //const eligibleCount = validationReport.reports.filter(report => report.result === ValidationResult.ELIGIBLE).length;

    return (
        <VStack>
            <VStack>
                <HStack>
                    <HStack sx={styles.questionBox} alignItems={'center'}>
                        <Typography sx={styles.questionText}>
                            Question: {questionsAnswered} / {questionsLeft}
                        </Typography>
                        <InfoIcon sx={{fontSize: '20px', color: globalStyles.tertiaryColorTransparent, cursor: 'pointer'}}
                                  onClick={() => setIsVisible(true)}
                        />
                    </HStack>
                </HStack>
            </VStack>
            {
                isVisible && (
                    <VStack>
                        <HStack>
                            <HStack justifyContent={'space-between'} sx={styles.updateInfoBox}>
                                <Typography sx={styles.updateInfoText}>
                                    We update the number of questions and potential benefits depending on your
                                    answers.
                                </Typography>
                                <CloseIcon
                                    sx={{fontSize: '20px', color: globalStyles.tertiaryColor, cursor: 'pointer'}}
                                    onClick={() => setIsVisible(false)}
                                /> </HStack>
                        </HStack>
                    </VStack>
                )
            }
        </VStack>
    );
};

const styles = {
    updateInfoBox: {
        padding: '12px',
        borderRadius: '12px',
        backgroundColor: globalStyles.tertiaryColorTransparent,
    },
    updateInfoText: {
        fontSize: '12px'
    },
    questionBox: {
        padding: '12px',
        borderRadius: '12px',
        borderWidth: '1px',
        borderColor: globalStyles.tertiaryColorTransparent,
        borderStyle: 'solid'
    },
    questionText: {
        fontSize: '12px'
    }
};

export default ProfileSectionTopHeader;
