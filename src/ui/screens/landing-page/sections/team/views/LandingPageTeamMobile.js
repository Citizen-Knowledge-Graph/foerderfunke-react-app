import React from "react";
import {MemberCardBen, MemberCardBenjamin} from "../components/LandingPageMembers";
import VStack from "../../../../../shared-components/VStack";

const LandingPageTeamMobile = () => {
    return (
        <VStack gap={5}>
            <VStack gap={5} justifyContent={'center'} sx={{width: '100%'}}>
                <MemberCardBenjamin/>
                <MemberCardBen/>
            </VStack>
        </VStack>
    )
}

export default LandingPageTeamMobile;
