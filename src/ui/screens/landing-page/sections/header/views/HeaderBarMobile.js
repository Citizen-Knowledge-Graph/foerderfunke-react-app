import React, { useState, useContext } from 'react';
import { LanguageContext } from "../../../../../language/LanguageContext";
import MenuIcon from '@mui/icons-material/Menu';
import { IconButton } from '@mui/material';
import { Link } from 'react-router-dom';
import LogoBar from "../../../../../shared-components/LogoBar";
import useTranslation from "../../../../../language/useTranslation";
import { HBox, VBox } from "../../../../../shared-components/LayoutBoxes";
import theme from "../../../../../../theme";
import LandingPageHollowButtonMobile from '../../../components/LandingPageButtonMobile';
import AntSwitch from '../../../../../shared-components/AntSwitch';
import LandingPageButton from '../../top-section/components/LandingPageButton';

const HeaderBarMobile = ({ isApp }) => {
    const [showDropdown, setShowDropdown] = useState(false);
    const { language, setLanguage } = useContext(LanguageContext);
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
                    <VBox sx={{ gap: theme.spacing(10), alignItems: 'center', justifyContent: 'center', height: '85vh' }}>
                        <VBox sx={{ gap: theme.spacing(2), alignItems: 'center' }}>
                            <LandingPageHollowButtonMobile isApp={isApp} setShowDropdown={setShowDropdown} text={t('home.menu.improve')} to='/#feedback' />
                            <LandingPageHollowButtonMobile isApp={isApp} setShowDropdown={setShowDropdown} text={t('home.menu.aboutUs')} to={"/#about-us"} />
                            <LandingPageHollowButtonMobile isApp={isApp} setShowDropdown={setShowDropdown} text={t('home.menu.activityLog')} to={'/activity-log'} />
                        </VBox>
                        <LandingPageButton />
                        <HBox alignItems="center" gap={1}>
                            <span style={{ color: isApp ? 'white' : 'black' }}>DE</span>
                            <AntSwitch
                                checked={isEnglish}
                                onChange={handleLanguageToggle}
                                inputProps={{ 'aria-label': 'language selection' }}
                                backgroundColor={isApp ? 'white' : 'black'}
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
