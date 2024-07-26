import React from "react";
import {Typography} from "@mui/material";
import VStack from "../../../../../components/VStack";
import HStack from "../../../../../components/HStack";
import LandingPageWAppButton from "../../../components/LandingPageWAppButton";
import LandingPageBenefitsList from "../components/LandingPageBenefitsList";

const LandingPageTopSectionDesktop = () => {

    return (
        <HStack justifyContent={'space-between'} alignItems={'center'}>
            <VStack alignItems={'flex-start'} sx={{maxWidth: '40%'}}>
                <Typography sx={styles.headerSectionTitle}>
                    Check benefits and financial support you can get support
                </Typography>
                <LandingPageWAppButton/>
            </VStack>
            <VStack sx={{maxWidth: '60%'}}>
                <HStack>
                    <LandingPageBenefitsList/>
                </HStack>
            </VStack>
        </HStack>
    );
}

const styles = {
    headerSectionTitle: {
        fontWeight: 'bold',
        fontSize: '28px',
        textAlign: 'left',
    }
}

export default LandingPageTopSectionDesktop;
