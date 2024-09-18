import React, {useContext, useState} from 'react';
import MenuIcon from '@mui/icons-material/Menu';
import {IconButton, ToggleButtonGroup, ToggleButton} from '@mui/material';
import {Link} from 'react-router-dom';
import HStack from "../../../../../components/HStack";
import LogoBar from "../../../../../components/LogoBar";
import VStack from "../../../../../components/VStack";
import featureFlags from "../../../../../featureFlags";
import LandingPageHollowButton from "../../../components/LandingPageButton";
import {LanguageContext} from "../../../../../language/LanguageContext";
import useTranslation from "../../../../../language/useTranslation";
import Divider from "@mui/material/Divider";
import globalStyles from "../../../../../styles/styles";

const HeaderBarMobile = ({isApp}) => {
    const [showDropdown, setShowDropdown] = useState(false);

    const {language, setLanguage} = useContext(LanguageContext);
    const {t} = useTranslation();

    const handleLanguageChange = (event, newLanguage) => {
        if (newLanguage !== null) {
            setLanguage(newLanguage);
        }
    };

    return (
        <VStack gap={5}>
            <HStack gap={5} justifyContent={'space-between'} alignItems={'center'} sx={{width: '100%'}}>
                <HStack alignItems={'center'}>
                    <Link to={"/"} style={{textDecoration: 'none', color: "black", width: '100%'}}>
                        <LogoBar size={'large'}/>
                    </Link>
                </HStack>
                <IconButton
                    aria-controls="simple-menu"
                    aria-haspopup="true"
                    onClick={() => setShowDropdown(!showDropdown)}
                >
                    <MenuIcon sx={{fontSize: '32px'}}/>
                </IconButton>
            </HStack>
            {
                showDropdown && (
                    <VStack
                        gap={2} alignItems={'center'}
                        sx={{
                            paddingBottom: '16px'
                        }}
                    >
                        {isApp ? null :
                            featureFlags.newFeedbackSection ? (
                                    <>
                                        <LandingPageHollowButton text={t('menu.improve')} to={'/#feedback'}/>
                                        <Divider sx={{width: '100%', backgroundColor: globalStyles.colorLightGreyTransparent}}/>
                                    </>
                                )
                                : null
                        }
                        {isApp ? null :
                            featureFlags.newCollaborationSection ? (
                                    <>
                                        <LandingPageHollowButton text={t('menu.collaborate')} to={'/#collaboration'}/>
                                        <Divider sx={{width: '100%', backgroundColor: globalStyles.colorLightGreyTransparent}}/>
                                    </>
                                )
                                : null
                        }
                        {isApp ? null :
                            featureFlags.newActivityLog ?
                                (<>
                                        <LandingPageHollowButton text={t('menu.activityLog')} to={'/activity-log'}/>
                                        <Divider
                                            sx={{width: '100%', backgroundColor: globalStyles.colorLightGreyTransparent}}/>
                                    </>
                                )
                                : null
                        }
                        {
                            isApp ? null : (
                                <>
                                    <LandingPageHollowButton text={t('menu.aboutUs')} to={"/#about-us"}/>
                                    <Divider sx={{width: '100%', backgroundColor: globalStyles.colorLightGreyTransparent}}/>
                                </>
                            )
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
                    </VStack>)
            }


        </VStack>
    )
}

export default HeaderBarMobile;
