import React from "react";
import HStack from "../../../../components/HStack";
import {Link} from "react-router-dom";
import HeaderBarMobile from "./views/HeaderBarMobile";
import HeaderBarDesktop from "./views/HeaderBarDesktop";
import LandingPageSectionWrapper from "../../components/LandingPageSectionWrapper";
import LogoBar from "../../../../components/LogoBar";

const HeaderBar = ({isApp, isDesktop}) => {
    const size = isDesktop ? 'large' : 'small';

    return (
        <LandingPageSectionWrapper isDesktop={isDesktop} isTop={true}>
            <HStack justifyContent={'space-between'} alignItems={'center'} sx={{width: '100%'}}>
                <HStack alignItems={'center'}>
                    <Link to={"/"} style={{textDecoration: 'none', color: "black", width: '100%'}}>
                        <LogoBar size={size}/>
                    </Link>
                </HStack>
                {isDesktop ? <HeaderBarDesktop isApp={isApp}/> : <HeaderBarMobile/>}
            </HStack>
        </LandingPageSectionWrapper>
    )
}

export default HeaderBar;
