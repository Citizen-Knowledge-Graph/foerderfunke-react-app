import React from "react";
import VStack from "../../../../../components/VStack";
import LandingPageInfoCard from "../components/LandingPageInfoCard";
import useTranslation from "../../../../../language/useTranslation";

const LandingPageHowItWorksMobile = ({quick_check, benefits_overview, benefit_page}) => {
    const { t } = useTranslation();

    return (
        <VStack gap={9} alignItems={'center'}>
            <VStack gap={3} alignItems={'center'}>
                <LandingPageInfoCard
                    title={t('home.howItWorks.part1Header')}
                    text={t('home.howItWorks.part1Text')}
                />
                <img
                    src={quick_check}
                    style={{
                        maxWidth: '250px',
                        height: 'auto',
                        boxShadow: '0px 8px 12px rgba(0, 0, 0, 0.15)',
                        borderRadius: '18px'
                    }}
                    alt={'phone 1'}/>
            </VStack>
            <VStack gap={3} alignItems={'center'}>
                <LandingPageInfoCard
                    title={t('home.howItWorks.part2Header')}
                    text={t('home.howItWorks.part2Text')}
                />
                <img
                    src={benefits_overview}
                    style={{
                        maxWidth: '250px',
                        height: 'auto',
                        boxShadow: '0px 8px 12px rgba(0, 0, 0, 0.15)',
                        borderRadius: '18px'
                    }}
                    alt={'phone 1'}/>
            </VStack>
            <VStack gap={3} alignItems={'center'}>
                <LandingPageInfoCard
                    title={t('home.howItWorks.part3Header')}
                    text={t('home.howItWorks.part3Text')}
                />
                <img
                    src={benefit_page}
                    style={{
                        maxWidth: '250px',
                        height: 'auto',
                        boxShadow: '0px 8px 12px rgba(0, 0, 0, 0.15)',
                        borderRadius: '18px'
                    }}
                    alt={'phone 1'}/>
            </VStack>
        </VStack>
    )
}

export default LandingPageHowItWorksMobile;
