import React, { useContext } from 'react';
import LandingPageWAppButton from "../../../components/LandingPageWAppButton";
import { LanguageContext } from "../../../../../language/LanguageContext";
import useTranslation from "../../../../../language/useTranslation";
import { Link } from "react-router-dom";
import { HBox } from '../../../../../shared-components/LayoutBoxes';
import LogoBar from '../../../../../shared-components/LogoBar';
import AntSwitch from '../../../../../shared-components/AntSwitch';
import LandingPageHollowButtonDesktop from '../../../components/LandingPageButtonDesktop';
import theme from '../../../../../../theme';

const HeaderBarDesktop = ({ isApp }) => {
    const { language, setLanguage } = useContext(LanguageContext);
    const { t } = useTranslation();
    const isEnglish = language === "en";

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
                    {!isApp ? <LandingPageWAppButton /> : null}
                    <LandingPageHollowButtonDesktop isApp={isApp} text={t('home.menu.improve')} to={'/#feedback'} />
                    <LandingPageHollowButtonDesktop isApp={isApp} text={t('home.menu.aboutUs')} to={"/#about-us"} />
                    <LandingPageHollowButtonDesktop isApp={isApp} text={t('home.menu.activityLog')} to={'/activity-log'} />
                    <HBox alignItems="center" gap={1} sx={{ color: isApp ? 'white' : 'black' }}>
                        <span style={{ color: isApp ? 'white' : 'black' }}>DE</span>
                        <AntSwitch
                            checked={isEnglish}
                            onChange={handleLanguageToggle}
                            inputProps={{ 'aria-label': 'language selection' }}
                            backgroundColor={isApp ? 'white' : theme.palette.blue.dark }
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