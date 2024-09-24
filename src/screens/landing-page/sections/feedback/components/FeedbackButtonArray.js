import React, {useEffect, useState} from "react";
import HStack from "../../../../../components/HStack";
import VStack from "../../../../../components/VStack";
import SentimentVeryDissatisfiedIcon from '@mui/icons-material/SentimentVeryDissatisfied';
import SentimentDissatisfiedIcon from '@mui/icons-material/SentimentDissatisfied';
import SentimentNeutralIcon from '@mui/icons-material/SentimentNeutral';
import SentimentSatisfiedIcon from '@mui/icons-material/SentimentSatisfied';
import SentimentVerySatisfiedIcon from '@mui/icons-material/SentimentVerySatisfied';
import FeedbackButtonMobile from "./FeedbackButtonMobile";
import FeedbackButtonDesktop from "./FeedbackButtonDesktop";
import useTranslation from "../../../../../language/useTranslation";

const FeedbackButtonArray = ({isDesktop, setFeedbackValue}) => {
    const { t } = useTranslation();
    const [selected, setSelected] = useState(null);

    // Array of icon components with corresponding sentiment colors
    const icons = [
        {Icon: SentimentVeryDissatisfiedIcon, color: '#f44336', label: t('feedback.1')},
        {Icon: SentimentDissatisfiedIcon, color: '#ff9800', label: t('feedback.2')},
        {Icon: SentimentNeutralIcon, color: '#9e9e9e', label: t('feedback.3')},
        {Icon: SentimentSatisfiedIcon, color: '#8bc34a', label: t('feedback.4')},
        {Icon: SentimentVerySatisfiedIcon, color: '#4caf50', label: t('feedback.5')},
    ];

    const handleButtonClick = (index) => {
        setSelected((prevSelected) => prevSelected === index ? null : index);
    };

    useEffect(() => {
        setFeedbackValue(selected !== null ? selected + 1 : null);
    }, [selected, setFeedbackValue]);

    const DynamicStacker = ({children}) => {
        if (isDesktop) {
            return (
                <HStack
                    gap={3}
                    alignItems={'center'}
                    justifyContent={'space-between'}
                    sx={{width: "100%"}}
                >
                    {children}
                </HStack>
            );
        }
        return (
            <VStack
                alignItems={'flex-start'}
                sx={{width: "100%"}}
            >
                {children}
            </VStack>
        );
    };

    const FeedbackButton = isDesktop ? FeedbackButtonDesktop : FeedbackButtonMobile;
    const displayIcons = isDesktop ? icons : [...icons].reverse();

    return (
        <DynamicStacker>
            {
                displayIcons.map((item, index) => (
                    <FeedbackButton
                        key={index}
                        Icon={item.Icon}
                        color={item.color}
                        label={item.label}
                        selected={selected === index}
                        handleButtonClick={() => handleButtonClick(index)}
                    />
                ))
            }
        </DynamicStacker>
    );
}

export default FeedbackButtonArray;
