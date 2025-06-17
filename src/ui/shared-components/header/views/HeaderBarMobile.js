import React, { useState } from 'react';
import MenuIcon from '@mui/icons-material/Menu';
import { IconButton } from '@mui/material';
import { Link } from 'react-router-dom';
import LogoBar from "@/ui/shared-components/LogoBar";
import { useLanguageStore } from '@/ui/storage/useLanguageStore';
import useTranslation from "@/ui/language/useTranslation";
import { HBox, VBox } from "@/ui/shared-components/LayoutBoxes";
import LandingPageHollowButtonMobile from '@/ui/screens/landing-page/components/LandingPageButtonMobile';
import AntSwitch from '@/ui/shared-components/AntSwitch';
import LandingPageButton from '@/ui/screens/landing-page/sections/top-section/components/LandingPageButton';

const HeaderBarMobile = ({ isApp }) => {
    const [showDropdown, setShowDropdown] = useState(false);
    const language = useLanguageStore((state) => state.language);
    const setLanguage = useLanguageStore((state) => state.setLanguage);
    const { t } = useTranslation();
    const isEnglish = language === "en";
    const color = isApp ? 'white.main' : 'black.main';

    const handleLanguageToggle = (event) => {
        setLanguage(event.target.checked ? "en" : "de");
    };

    return (
        <VBox sx={{
            alignItems: 'center',
            padding: '20px 24px',
        }}>
            <HBox sx={{
                justifyContent: 'space-between',
                alignItems: 'center',
                width: '100%'
            }}>
                <HBox alignItems={'center'}>
                    <Link to={"/"} style={{ textDecoration: 'none', color: "black", width: '100%' }}>
                        <LogoBar size={'large'} isApp={isApp} />
                    </Link>
                </HBox>
                <IconButton
                    aria-controls="simple-menu"
                    aria-haspopup="true"
                    onClick={() => setShowDropdown(!showDropdown)}
                >
                    <MenuIcon sx={{ color: color, fontSize: '32px' }} />
                </IconButton>
            </HBox>
            {
                showDropdown && (
                    <VBox sx={{ gap: 10, alignItems: 'center', justifyContent: 'center', height: '85vh' }}>
                        <VBox sx={{ gap: 2, alignItems: 'center' }}>
                            <LandingPageHollowButtonMobile isApp={isApp} setShowDropdown={setShowDropdown} text={t('home.menu.improve')} to='/#feedback' />
                            <LandingPageHollowButtonMobile isApp={isApp} setShowDropdown={setShowDropdown} text={t('home.menu.aboutUs')} to={"/#about-us"} />
                        </VBox>
                        <LandingPageButton />
                        <HBox alignItems="center" gap={1}>
                            <span style={{ color: isApp ? 'white' : 'black' }}>DE</span>
                            <AntSwitch
                                checked={isEnglish}
                                onChange={handleLanguageToggle}
                                inputProps={{ 'aria-label': 'language selection' }}
                                color={isApp ? 'black' : 'white'}
                            />
                            <span style={{ color: isApp ? 'white' : 'black' }}>EN</span>
                        </HBox>
                    </VBox>)
            }
        </VBox>
    )
}

export default HeaderBarMobile;
