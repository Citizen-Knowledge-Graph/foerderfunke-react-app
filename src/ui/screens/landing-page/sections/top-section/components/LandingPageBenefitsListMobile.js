import React, {useState} from "react";
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import VStack from "../../../../../shared-components/VStack";
import HStack from "../../../../../shared-components/HStack";
import IconButton from '@mui/material/IconButton';
import LandingPageBenefitsCardMobile from "./LandingPageBenefitsCardMobile";

const LandingPageBenefitsListMobile = ({benefits}) => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isTransitioning, setIsTransitioning] = useState(false);

    const handlePrevClick = () => {
        if (isTransitioning) return;
        setIsTransitioning(true);
        setTimeout(() => {
            setCurrentIndex((prevIndex) => (prevIndex - 1 + benefits.length) % benefits.length);
            setIsTransitioning(false);
        }, 300); // Duration of the transition
    };

    const handleNextClick = () => {
        if (isTransitioning) return;
        setIsTransitioning(true);
        setTimeout(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % benefits.length);
            setIsTransitioning(false);
        }, 300); // Duration of the transition
    };

    return (
        <VStack gap={3} alignItems={'center'}>
            <HStack>
                <IconButton onClick={handlePrevClick} disabled={isTransitioning}>
                    <ChevronLeftIcon/>
                </IconButton>
                <IconButton onClick={handleNextClick} disabled={isTransitioning}>
                    <ChevronRightIcon/>
                </IconButton>
            </HStack>
            <HStack justifyContent={'center'} sx={{ width: '100%', overflow: 'hidden' }}>
                <LandingPageBenefitsCardMobile benefit={benefits[currentIndex]} isTransitioning={isTransitioning} />
            </HStack>
        </VStack>
    );
};

export default LandingPageBenefitsListMobile;
