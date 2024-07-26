import React, {useRef, useState} from "react";
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import VStack from "../../../../../components/VStack";
import HStack from "../../../../../components/HStack";
import IconButton from '@mui/material/IconButton';
import LandingPageBenefitsCardMobile from "./LandingPageBenefitsCardMobile";

const benefits = [
    {id: 1, name: "Benefit 1"},
    {id: 2, name: "Benefit 2"},
    {id: 3, name: "Benefit 3"},
    {id: 4, name: "Benefit 4"},
    {id: 5, name: "Benefit 5"},
];

const LandingPageBenefitsListMobile = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const cardHeight = 500;

    const handlePrevClick = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + benefits.length) % benefits.length);
    };

    const handleNextClick = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % benefits.length);
    };

    return (
        <VStack gap={3} alignItems={'center'}>
            <HStack>
                <IconButton onClick={handlePrevClick}>
                    <ChevronLeftIcon/>
                </IconButton>
                <IconButton onClick={handleNextClick}>
                    <ChevronRightIcon/>
                </IconButton>
            </HStack>
            <HStack style={{position: "relative", width: "100%", height: `${cardHeight}px`, overflow: "hidden"}}>
                <HStack
                    justifyContent={'center'}
                    gap={0}
                    sx={{
                        transform: `translateX(-${currentIndex * 325}px)`,
                        transition: "transform 1s ease-in-out",
                        width: `${benefits.length * 325}px`,
                        position: "absolute",
                    }}
                >
                    {benefits.map((benefit, index) => (
                        <HStack
                            key={index}
                            justifyContent={'center'}
                            alignItems={'center'}
                        >
                            <LandingPageBenefitsCardMobile benefit={benefit} cardHeight={cardHeight}/>
                        </HStack>
                    ))}
                </HStack>
            </HStack>
        </VStack>
    );
};

export default LandingPageBenefitsListMobile;
