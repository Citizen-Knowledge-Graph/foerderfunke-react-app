import HStack from "../../../../../components/HStack";
import VStack from "../../../../../components/VStack";
import React from "react";

const LandingPageSupportCardStacker = ({isDesktop, children}) => {
    return (
        isDesktop ? (
                <HStack sx={{width: '100%'}} gap={5} justifyContent={'flex-end'} alignItems={'flex-end'}>
                    {children}
                </HStack>
            )
            : (
                <VStack gap={3} sx={{flex: 1}}>
                    {children}
                </VStack>
            )
    );
}

export default LandingPageSupportCardStacker;
