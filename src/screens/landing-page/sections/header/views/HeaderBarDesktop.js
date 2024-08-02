import React from 'react';
import Typography from '@mui/material/Typography';
import HStack from "../../../../../components/HStack";
import LandingPageWAppButton from "../../../components/LandingPageWAppButton";
import NarBarLink from "../../../../../components/NavBarLink";

const HeaderBarDesktop = () => {
    return (
        <HStack gap={5} alignItems={'center'}>
            <HStack gap={5} justifyContent={'center'} alignItems={'center'}>
                <NarBarLink to={"/#how-it-works"} title={'How it works'}/>
                <NarBarLink to={"/#principles"} title={'Principles'}/>
                <NarBarLink to={"/#about-us"} title={'About us'}/>
                <LandingPageWAppButton backgroundColor={'primary'}/>
            </HStack>
            <Typography>
                EN/DE
            </Typography>
        </HStack>
    )
}

export default HeaderBarDesktop;
