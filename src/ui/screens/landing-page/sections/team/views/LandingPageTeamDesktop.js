import React from "react";
import HStack from "../../../../../shared-components/HStack";
import {MemberCardBen, MemberCardBenjamin} from "../components/LandingPageMembers";

const LandingPageTeamDesktop = () => {
    return (
        <HStack justifyContent={'center'} sx={{width: '840px'}}>
            <MemberCardBenjamin/>
            <MemberCardBen/>
        </HStack>
    )
}

export default LandingPageTeamDesktop;
