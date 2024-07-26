import React from "react";
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import VStack from "../../../../../components/VStack";
import HStack from "../../../../../components/HStack";

const LandingPageBenefitsListMobile = () => {
    const quickCheckImage = `${process.env.PUBLIC_URL}/assets/images/family-stock-gpt4o.png`;

    return (
        <VStack gap={3} alignItems={'center'}>
            <HStack>
                <ChevronLeftIcon/>
                <ChevronRightIcon/>
            </HStack>
            <HStack justifyContent={'center'} sx={{position: "relative", width: '325px', overflow: 'hidden'}}>
                <img src={quickCheckImage} alt="Landing Page"
                     style={{width: "100%", height: "auto", borderRadius: "15px"}}/>
            </HStack>
        </VStack>
    );
}

export default LandingPageBenefitsListMobile;
