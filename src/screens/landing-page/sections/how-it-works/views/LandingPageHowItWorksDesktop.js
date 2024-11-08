import React, {useState} from "react";
import VStack from "../../../../../components/VStack";
import HStack from "../../../../../components/HStack";
import LandingPageInfoCard from "../components/LandingPageInfoCard";
import useTranslation from "../../../../../language/useTranslation";

const LandingPageHowItWorksDesktop = ({quick_check, benefits_overview, benefit_page}) => {
    const {t} = useTranslation();
    const [imageHeight, setImageHeight] = useState(null);
    const [hoveredIndex, setHoveredIndex] = useState(null);

    const handleImageLoad = (event) => {
        if (!imageHeight) {
            setImageHeight(event.target.clientHeight);
        }
    };

    const handleMouseEnter = (index) => setHoveredIndex(index);
    const handleMouseLeave = () => setHoveredIndex(null);

    return (
        <VStack gap={9} alignItems={'center'} sx={{width: '100%'}}>
            <HStack gap={9} sx={{width: '100%'}} justifyContent={'space-between'} alignItems={'center'}>
                <VStack>
                    <LandingPageInfoCard
                        title={t('home.howItWorks.part1Header')}
                        text={t('home.howItWorks.part1Text')}
                        onMouseEnter={() => handleMouseEnter(0)}
                        onMouseLeave={handleMouseLeave}
                        hovered={hoveredIndex === 0}
                    />
                    <LandingPageInfoCard
                        title={t('home.howItWorks.part2Header')}
                        text={t('home.howItWorks.part2Text')}
                        onMouseEnter={() => handleMouseEnter(1)}
                        onMouseLeave={handleMouseLeave}
                        hovered={hoveredIndex === 1}
                    />
                    <LandingPageInfoCard
                        title={t('home.howItWorks.part3Header')}
                        text={t('home.howItWorks.part3Text')}
                        onMouseEnter={() => handleMouseEnter(2)}
                        onMouseLeave={handleMouseLeave}
                        hovered={hoveredIndex === 2}
                    />
                </VStack>
                <HStack
                    alignItems={'flex-start'}
                    sx={{
                        position: "relative",
                        width: "calc(275px + 2 * 36px);",
                        height: imageHeight ? `${imageHeight}px` : 'auto'
                    }}
                >
                    <img
                        src={benefit_page}
                        onMouseEnter={() => handleMouseEnter(2)}
                        onMouseLeave={handleMouseLeave}
                        style={{
                            width: '275px',
                            height: 'auto',
                            boxShadow: '0px 8px 12px rgba(0, 0, 0, 0.15)',
                            borderRadius: '18px',
                            position: "absolute",
                            top: 0,
                            left: 72,
                            zIndex: hoveredIndex === 2 ? 2 : 1,
                            transition: 'transform 0.5s ease',
                            transform: hoveredIndex === 2 ? 'scale(1.025)' : 'scale(1)',
                        }}
                        alt={'phone 1'}/>
                    <img
                        src={benefits_overview}
                        onMouseEnter={() => handleMouseEnter(1)}
                        onMouseLeave={handleMouseLeave}
                        style={{
                            width: '275px',
                            height: 'auto',
                            boxShadow: '0px 8px 12px rgba(0, 0, 0, 0.15)',
                            borderRadius: '18px',
                            position: "absolute",
                            top: 0,
                            left: 36,
                            zIndex: hoveredIndex === 1 ? 2 : 1,
                            transition: 'transform 0.5s ease',
                            transform: hoveredIndex === 1 ? 'scale(1.025)' : 'scale(1)',
                        }}
                        alt={'phone 1'}/>

                    <img
                        src={quick_check}
                        onLoad={handleImageLoad}
                        onMouseEnter={() => handleMouseEnter(0)}
                        onMouseLeave={handleMouseLeave}
                        style={{
                            width: '275px',
                            height: 'auto',
                            boxShadow: '0px 8px 12px rgba(0, 0, 0, 0.15)',
                            borderRadius: '18px',
                            position: "absolute",
                            top: 0,
                            left: 0,
                            zIndex: hoveredIndex === 0 ? 2 : 1,
                            transition: 'transform 0.5s ease',
                            transform: hoveredIndex === 0 ? 'scale(1.025)' : 'scale(1)',
                        }}
                        alt={'phone 1'}
                    />
                </HStack>
            </HStack>
        </VStack>
    )
}

export default LandingPageHowItWorksDesktop;
