import React from "react";
import {Typography} from "@mui/material";
import VStack from "../../../../../components/VStack";
import HStack from "../../../../../components/HStack";
import LandingPageWAppButton from "../../../components/LandingPageWAppButton";
import LandingPageBenefitsListDesktop from "../components/LandingPageBenefitsListDesktop";

const LandingPageTopSectionDesktop = ({benefits}) => {

    return (
        <HStack justifyContent={'space-between'} alignItems={'center'}>
            <VStack alignItems={'flex-start'} sx={{maxWidth: '40%'}}>
                <Typography sx={styles.headerSectionTitle}>
                    Check benefits and financial support you can get
                </Typography>
                <LandingPageWAppButton backgroundColor={'primary'}/>
            </VStack>
            <VStack sx={{maxWidth: '60%'}}>
                <HStack>
                    <LandingPageBenefitsListDesktop benefits={benefits}/>
                </HStack>
            </VStack>
        </HStack>
    );
}

const styles = {
    headerSectionTitle: {
        fontWeight: 'bold',
        fontSize: '44px',
        textAlign: 'left',
    }
}

export default LandingPageTopSectionDesktop;
