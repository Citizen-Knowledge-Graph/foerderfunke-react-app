import React, { useContext } from 'react';
import LandingPageWAppButton from "../../../components/LandingPageWAppButton";
import LandingPageHollowButton from "../../../components/LandingPageButton";
import { LanguageContext } from "../../../../../language/LanguageContext";
import useTranslation from "../../../../../language/useTranslation";
import { Link } from "react-router-dom";
import { HBox } from '../../../../../shared-components/LayoutBoxes';
import LogoBar from '../../../../../shared-components/LogoBar';
import AntSwitch from '../../../../../shared-components/AntSwitch';
import theme from "../../../../../../theme";

const HeaderBarDesktop = () => {
    const { language, setLanguage } = useContext(LanguageContext);
    const { t } = useTranslation();
    const isEnglish = language === "en";

    const handleLanguageToggle = (event) => {
        setLanguage(event.target.checked ? "en" : "de");
    };

    return (
        <HBox sx={{
            backgroundColor: theme.palette.white.main,
            justifyContent: 'space-between',
            alignItems: 'center',
            padding: '59px 96px',
        }}>
            <HBox alignItems={'center'}>
                <Link to={"/"} style={{ textDecoration: 'none', color: "black" }}>
                    <LogoBar size={'large'} />
                </Link>
            </HBox>
            <HBox justifyContent={'flex-end'} alignItems={'center'}>
                <HBox gap={5}>
                    <LandingPageWAppButton />
                    <LandingPageHollowButton text={t('home.menu.improve')} to={'/#feedback'} />
                    <LandingPageHollowButton text={t('home.menu.aboutUs')} to={"/#about-us"} />
                    <LandingPageHollowButton text={t('home.menu.activityLog')} to={'/activity-log'} />
                    <HBox alignItems="center" gap={1}>
                        <span>DE</span>
                        <AntSwitch
                            checked={isEnglish}
                            onChange={handleLanguageToggle}
                            inputProps={{ 'aria-label': 'language selection' }}
                        />
                        <span>EN</span>
                    </HBox>
                </HBox>
            </HBox>
        </HBox>
    )
}

export default HeaderBarDesktop;