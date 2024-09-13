import React, {useContext} from 'react';
import HStack from "../../../../../components/HStack";
import LandingPageWAppButton from "../../../components/LandingPageWAppButton";
import NarBarLink from "../../../../../components/NavBarLink";
import {Typography} from "@mui/material";
import LanguageContext from "../../../../../language/LanguageContext";
import featureFlags from "../../../../../featureFlags";

const HeaderBarDesktop = ({isApp}) => {
    const { language, setLanguage } = useContext(LanguageContext);

    return (
        <HStack gap={5} alignItems={'center'}>
            <HStack gap={5} justifyContent={'center'} alignItems={'center'}>
                <NarBarLink to={"/#how-it-works"} title={'How it works'}/>
                <NarBarLink to={"/#principles"} title={'Principles'}/>
                <NarBarLink to={"/#about-us"} title={'About us'}/>
                {isApp ? null : <LandingPageWAppButton backgroundColor={'primary'}/>}
            </HStack>
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
    )
}

export default HeaderBarDesktop;
