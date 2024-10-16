import React from "react";
import VStack from "../../../components/VStack";
import LandingPageSectionTitle from "./LandingPageSectionTitle";

const LandingPageSectionGrid = ({children, title}) => {
    return (
        <VStack gap={5} alignItems={'center'}>
            <LandingPageSectionTitle title={title}/>
            <VStack gap={5} sx={{maxWidth: '840px'}} alignItems={'center'}>
                {children}
            </VStack>
        </VStack>
    )
}

export default LandingPageSectionGrid;
