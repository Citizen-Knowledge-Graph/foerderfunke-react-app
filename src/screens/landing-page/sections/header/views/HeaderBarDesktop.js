import React, {useContext} from 'react';
import {ToggleButton, ToggleButtonGroup} from "@mui/material";
import HStack from "../../../../../components/HStack";
import LandingPageWAppButton from "../../../components/LandingPageWAppButton";
import LandingPageHollowButton from "../../../components/LandingPageButton";
import {LanguageContext} from "../../../../../language/LanguageContext";
import featureFlags from "../../../../../featureFlags";
import useTranslation from "../../../../../language/useTranslation";
import {Link} from "react-router-dom";
import LogoBar from "../../../../../components/LogoBar";

const HeaderBarDesktop = ({isApp}) => {
    const {language, setLanguage} = useContext(LanguageContext);
    const {t} = useTranslation();

    const handleLanguageChange = (event, newLanguage) => {
        if (newLanguage !== null) {
            setLanguage(newLanguage);
        }
    };

    return (
        <HStack gap={5} justifyContent={'space-between'} alignItems={'center'} sx={{width: '100%'}}>
            <HStack alignItems={'center'}>
                <Link to={"/"} style={{textDecoration: 'none', color: "black", width: '100%'}}>
                    <LogoBar size={'large'}/>
                </Link>
            </HStack>
            <HStack gap={9} justifyContent={'flex-end'} alignItems={'center'} sx={{width: '100%'}}>
                <HStack gap={5}>
                    {isApp ? null : <LandingPageWAppButton backgroundColor={'primary'}/>}
                    {isApp ? null :
                        featureFlags.newFeedbackSection ?
                            <LandingPageHollowButton text={t('home.menu.improve')} to={'/#feedback'}/>
                            : null
                    }
                    {
                        isApp ? null :
                            <LandingPageHollowButton text={t('home.menu.aboutUs')} to={"/#about-us"}/>
                    }
                    {isApp ? null :
                        featureFlags.newActivityLog ?
                            <LandingPageHollowButton text={t('home.menu.activityLog')} to={'/activity-log'}/>
                            : null
                    }
                    {
                        featureFlags.newLanguageToggle && (
                            <ToggleButtonGroup
                                value={language}
                                exclusive
                                onChange={handleLanguageChange}
                                aria-label="language selection"
                                size="small"
                            >
                                <ToggleButton
                                    value="en"
                                    aria-label="english"
                                    sx={{padding: '8px'}}
                                >
                                    EN
                                </ToggleButton>
                                <ToggleButton
                                    value="de"
                                    aria-label="german"
                                    sx={{padding: '8px'}}
                                >
                                    DE
                                </ToggleButton>
                            </ToggleButtonGroup>
                        )
                    }
                </HStack>
            </HStack>
        </HStack>
    )
}

export default HeaderBarDesktop;
