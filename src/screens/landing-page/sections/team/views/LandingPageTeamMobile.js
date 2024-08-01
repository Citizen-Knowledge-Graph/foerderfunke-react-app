import React from "react";
import {MemberCardBen, MemberCardBenjamin, MemberCardVanessa} from "../components/LandingPageMembers";
import VStack from "../../../../../components/VStack";
import HStack from "../../../../../components/HStack";
import LandingPageSupportCard from "../components/LandingPageSupportCard";

const LandingPageTeamMobile = () => {
    return (
        <VStack gap={5}>
            <VStack gap={5} justifyContent={'center'} sx={{width: '100%'}}>
                <MemberCardBenjamin/>
                <MemberCardVanessa/>
                <MemberCardBen/>
            </VStack>
            <HStack justifyContent={'center'} sx={{width: '100%'}}>
                <LandingPageSupportCard isDesktop={false}/>
            </HStack>
        </VStack>
    )
}

export default LandingPageTeamMobile;
