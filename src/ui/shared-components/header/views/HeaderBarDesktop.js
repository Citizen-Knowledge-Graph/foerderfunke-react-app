import React, { useEffect, useState } from 'react';
import useTranslation from "@/ui/language/useTranslation";
import { Link } from "react-router-dom";
import { HBox } from '@/ui/shared-components/LayoutBoxes';
import LogoBar from '@/ui/shared-components/LogoBar';
import AntSwitch from '@/ui/shared-components/AntSwitch';
import LandingPageHollowButtonDesktop from '@/ui/screens/landing-page/components/LandingPageButtonDesktop';
import theme from '@/theme';
import RegularButton from '@/ui/shared-components/buttons/RegularButton';
import { useLanguageStore } from '@/ui/storage/useLanguageStore';

const HeaderBarDesktop = ({ isApp }) => {
    const language = useLanguageStore((state) => state.language);
    const setLanguage = useLanguageStore((state) => state.setLanguage);
    const { t } = useTranslation();
    const isEnglish = language === "en";

    const [isSmallScreen, setIsSmallScreen] = useState(window.innerWidth < 1200);

    useEffect(() => {
        const handleResize = () => {
            setIsSmallScreen(window.innerWidth < 1200);
        };

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const handleLanguageToggle = (event) => {
        setLanguage(event.target.checked ? "en" : "de");
    };

    return (
        <HBox sx={{
            justifyContent: 'space-between',
            alignItems: 'center',
            padding: '59px 96px',
        }}>
            <HBox alignItems={'center'}>
                <Link to={"/"} style={{ textDecoration: 'none', color: "black" }}>
                    <LogoBar size={'large'} isApp={isApp} />
                </Link>
            </HBox>
            <HBox justifyContent={'flex-end'} alignItems={'center'}>
                <HBox gap={5}>
                    {!isApp ? 
                        <RegularButton 
                            text={isSmallScreen ? 'home.global.actionButtonShort' : 'home.global.actionButton'}
                            variant={'blackOutlined'} 
                            link='/user-routing' 
                        /> : null}
                    <LandingPageHollowButtonDesktop isApp={isApp} text={t('home.menu.improve')} to={'/#feedback'} />
                    <LandingPageHollowButtonDesktop isApp={isApp} text={t('home.menu.aboutUs')} to={"/#about-us"} />
                    <HBox alignItems="center" gap={1} sx={{ color: isApp ? 'white' : 'black' }}>
                        <span style={{ color: isApp ? 'white' : 'black' }}>DE</span>
                        <AntSwitch
                            checked={isEnglish}
                            onChange={handleLanguageToggle}
                            inputProps={{ 'aria-label': 'language selection' }}
                            color={isApp ? theme.palette.blue.dark : 'white'}
                        />
                        <span style={{ color: isApp ? 'white' : 'black' }}>EN</span>
                    </HBox>
                </HBox>
            </HBox>
        </HBox>
    )
}

export default HeaderBarDesktop;