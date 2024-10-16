import React from "react";
import VStack from "../../../../../components/VStack";
import HStack from "../../../../../components/HStack";
import {MemberCardBen, MemberCardBenjamin, MemberCardVanessa} from "../components/LandingPageMembers";
import LandingPageSupportCard from "../components/LandingPageSupportCard";

const LandingPageTeamDesktop = () => {
    return (
        <VStack gap={7} alignItems={'center'}>
            <HStack justifyContent={'center'} sx={{width: '100%'}}>
                <MemberCardBenjamin/>
                <MemberCardVanessa/>
                <MemberCardBen/>
            </HStack>
            <HStack justifyContent={'center'} sx={{width: '100%'}}>
                <LandingPageSupportCard isDesktop={true}/>
            </HStack>
        </VStack>
    )
}

export default LandingPageTeamDesktop;
