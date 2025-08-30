import React, { useEffect, useState } from 'react';
import useTranslation from "@/ui/language/useTranslation";
import { Link } from "react-router-dom";
import { HBox } from '@/ui/shared-components/LayoutBoxes';
import LogoBar from '@/ui/shared-components/LogoBar';
import LandingPageHollowButtonDesktop from '@/ui/screens/landing-page/components/LandingPageButtonDesktop';
import RegularButton from '@/ui/shared-components/buttons/RegularButton';
import LanguageDropdown from '@/ui/shared-components/LanguageDropdown';
import { Typography } from '@mui/material';
import theme from '@/theme';

const HeaderBarDesktop = ({ isApp, runway }) => {
    const { t } = useTranslation();

    const [isSmallScreen, setIsSmallScreen] = useState(window.innerWidth < 1200);

    useEffect(() => {
        const handleResize = () => {
            setIsSmallScreen(window.innerWidth < 1200);
        };

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return (
        <HBox sx={{
            justifyContent: 'space-between',
            alignItems: 'center',
            padding: '59px 96px',
        }}>
            <HBox alignItems={'center'}>
                <Link to={"/"} style={{ textDecoration: 'none', color: "black" }}>
                    <HBox alignItems={'center'}>
                        <LogoBar size={'large'} isApp={isApp} />
                        <HBox
                            sx={{
                                alignItems: 'center',
                                borderLeft: `2px solid ${theme.palette.pink.main}`,
                                paddingLeft: 2,
                            }}
                        >
                            {
                                runway === 'bielefunke' && (
                                    <Typography variant='h2' sx={{ color: "pink.main", fontWeight: '500', marginLeft: '8px' }}>
                                        Bielefeld
                                    </Typography>
                                )
                            }
                        </HBox>
                    </HBox>
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
                    <LanguageDropdown isApp={isApp} />
                </HBox>
            </HBox>
        </HBox >
    )
}

export default HeaderBarDesktop;