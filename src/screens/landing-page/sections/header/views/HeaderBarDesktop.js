import React, {useContext} from 'react';
import {Typography} from "@mui/material";
import HStack from "../../../../../components/HStack";
import LandingPageWAppButton from "../../../components/LandingPageWAppButton";
import NarBarLink from "../../../../../components/NavBarLink";
import LandingPageHollowButton from "../../../components/LandingPageButton";
import { LanguageContext } from "../../../../../language/LanguageContext";
import featureFlags from "../../../../../featureFlags";

const HeaderBarDesktop = ({isApp}) => {
    const {language, setLanguage} = useContext(LanguageContext);

    return (
        <HStack gap={5} justifyContent={'flex-end'} alignItems={'center'} sx={{width: '100%'}}>
            <HStack gap={3}>
                {isApp ? null : <LandingPageWAppButton backgroundColor={'primary'}/>}
                {isApp ? null : <LandingPageHollowButton text={'Help us improve'} to={'/#feedback'}/>}
                {isApp ? null : <LandingPageHollowButton text={'Collaborate'} to={'/#collaboration'}/>}
            </HStack>
            <HStack>
                <NarBarLink to={"/#about-us"} title={'About us'}/>
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
