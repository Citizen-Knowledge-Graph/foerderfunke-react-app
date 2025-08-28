import React, { useEffect, useState } from 'react';
import useTranslation, { LANG_OPTIONS } from "@/ui/language/useTranslation";
import { Link } from "react-router-dom";
import { HBox } from '@/ui/shared-components/LayoutBoxes';
import LogoBar from '@/ui/shared-components/LogoBar';
import LandingPageHollowButtonDesktop from '@/ui/screens/landing-page/components/LandingPageButtonDesktop';
import RegularButton from '@/ui/shared-components/buttons/RegularButton';
import { useLanguageStore } from '@/ui/storage/useLanguageStore';
import { Select, MenuItem } from "@mui/material";

const HeaderBarDesktop = ({ isApp }) => {
    const language = useLanguageStore((state) => state.language);
    const setLanguage = useLanguageStore((state) => state.setLanguage);
    const { t } = useTranslation();

    const [isSmallScreen, setIsSmallScreen] = useState(window.innerWidth < 1200);

    useEffect(() => {
        const handleResize = () => {
            setIsSmallScreen(window.innerWidth < 1200);
        };

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const handleLanguageChange = (event) => {
        setLanguage(event.target.value);
    }

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
                    <LandingPageHollowButtonDesktop isApp={isApp} text={t('home.menu.catalog')} to={'/eligibility-overview'} />
                    <LandingPageHollowButtonDesktop isApp={isApp} text={t('home.menu.improve')} to={'/#feedback'} />
                    <LandingPageHollowButtonDesktop isApp={isApp} text={t('home.menu.aboutUs')} to={"/#about-us"} />
                    <HBox alignItems="center" gap={1} sx={{ color: isApp ? 'white' : 'black' }}>
                        <Select value={language} onChange={handleLanguageChange}>
                            {LANG_OPTIONS.map(opt => (
                                <MenuItem key={opt.code} value={opt.code}>
                                    {opt.label}
                                </MenuItem>
                            ))}
                        </Select>
                    </HBox>
                </HBox>
            </HBox>
        </HBox>
    )
}

export default HeaderBarDesktop;