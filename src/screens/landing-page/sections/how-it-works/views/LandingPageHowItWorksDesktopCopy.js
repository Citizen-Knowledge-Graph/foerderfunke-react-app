import React from "react";
import VStack from "../../../../../components/VStack";
import HStack from "../../../../../components/HStack";
import LandingPageInfoCard from "../components/LandingPageInfoCard";
import useTranslation from "../../../../../language/useTranslation";

const LandingPageHowItWorksDesktop = ({quick_check, benefits_overview, benefit_page}) => {
    const { t } = useTranslation();

    return (
        <VStack gap={9} alignItems={'center'} sx={{width: '100%'}}>
            <HStack gap={9} justifyContent={'space-between'} alignItems={'center'}>
                <VStack
                <LandingPageInfoCard
                    title={t('home.howItWorks.part1Header')}
                    text={t('home.howItWorks.part1Text')}
                />
                <img
                    src={quick_check}
                    style={{
                        width: '300px',
                        height: 'auto',
                        boxShadow: '0px 8px 12px rgba(0, 0, 0, 0.15)',
                        borderRadius: '18px'
                    }}
                    alt={'phone 1'}
                />
            </HStack>
            <HStack gap={9} justifyContent={'space-between'} alignItems={'center'}>
                <img
                    src={benefits_overview}
                    style={{
                        width: '300px',
                        height: 'auto',
                        boxShadow: '0px 8px 12px rgba(0, 0, 0, 0.15)',
                        borderRadius: '18px'
                    }}
                    alt={'phone 1'}/>
                <LandingPageInfoCard
                    title={t('home.howItWorks.part2Header')}
                    text={t('home.howItWorks.part2Text')}
                />
            </HStack>
            <HStack gap={9} justifyContent={'space-between'} alignItems={'center'}>
                <LandingPageInfoCard
                    title={t('home.howItWorks.part3Header')}
                    text={t('home.howItWorks.part3Text')}
                />
                <img
                    src={benefit_page}
                    style={{
                        width: '300px',
                        height: 'auto',
                        boxShadow: '0px 8px 12px rgba(0, 0, 0, 0.15)',
                        borderRadius: '18px'
                    }}
                    alt={'phone 1'}/>
            </HStack>
        </VStack>
    )
}

export default LandingPageHowItWorksDesktop;
