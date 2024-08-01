import React from "react";
import HStack from "../../../../../components/HStack";
import {MemberCardBen, MemberCardBenjamin, MemberCardVanessa} from "../components/LandingPageMembers";

const LandingPageTeamDesktop = () => {
    return (
        <HStack justifyContent={'center'} sx={{width: '100%'}}>
            <MemberCardBenjamin/>
            <MemberCardVanessa/>
            <MemberCardBen/>
        </HStack>
    )
}

export default LandingPageTeamDesktop;
