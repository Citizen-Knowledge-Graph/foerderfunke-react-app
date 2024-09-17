import React, {useContext} from 'react';
import {Typography} from "@mui/material";
import HStack from "../../../../../components/HStack";
import LandingPageWAppButton from "../../../components/LandingPageWAppButton";
import NarBarLink from "../../../../../components/NavBarLink";
import LandingPageHollowButton from "../../../components/LandingPageButton";
import { LanguageContext } from "../../../../../language/LanguageContext";
import featureFlags from "../../../../../featureFlags";
import useTranslation from "../../../../../language/useTranslation";

const HeaderBarDesktop = ({isApp}) => {
    const {language, setLanguage} = useContext(LanguageContext);
    const { t } = useTranslation();

    return (
        <HStack gap={5} justifyContent={'flex-end'} alignItems={'center'} sx={{width: '100%'}}>
            <HStack gap={3}>
                {isApp ? null : <LandingPageWAppButton backgroundColor={'primary'}/>}
                {isApp ? null :
                    featureFlags.newFeedbackSection ?
                        <LandingPageHollowButton text={t('menu.improve')} to={'/#feedback'}/>
                        : null
                }
                {isApp ? null :
                    featureFlags.newCollaborationSection ?
                        <LandingPageHollowButton text={t('menu.collaborate')} to={'/#collaboration'}/>
                        : null
                }
                {isApp ? null :
                    featureFlags.newActivityLog ?
                        <LandingPageHollowButton text={t('menu.activityLog')} to={'/activity-log'}/>
                        : null
                }
            </HStack>
            <HStack>
                <NarBarLink to={"/#about-us"} title={t('menu.aboutUs')}/>
                {
                    featureFlags.newLanguageToggle && (
                        <Typography>
                        <span
                            onClick={() => setLanguage('en')}
                            style={{
                                cursor: 'pointer',
                                fontWeight: language === 'en' ? 'bold' : 'normal',
                            }}
                        >
                          EN
                        </span>
                            {' '}/{' '}
                            <span
                                onClick={() => setLanguage('de')}
                                style={{
                                    cursor: 'pointer',
                                    fontWeight: language === 'de' ? 'bold' : 'normal',
                                }}
                            >
                          DE
                        </span>
                        </Typography>
                    )
                }
            </HStack>
        </HStack>
    )
}

export default HeaderBarDesktop;
