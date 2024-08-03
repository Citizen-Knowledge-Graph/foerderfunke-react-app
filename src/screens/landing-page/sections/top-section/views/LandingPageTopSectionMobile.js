import React from "react";
import {Typography} from "@mui/material";
import VStack from "../../../../../components/VStack";
import LandingPageWAppButton from "../../../components/LandingPageWAppButton";
import LandingPageBenefitsListMobile from "../components/LandingPageBenefitsListMobile";

const LandingPageTopSectionMobile = ({benefits}) => {
    return (
        <VStack>
            <VStack alignItems={'center'}>
                <Typography sx={styles.headerSectionTitle}>
                    Check benefits and financial support you can get support
                </Typography>
                <LandingPageWAppButton backgroundColor={'primary'}/>
            </VStack>
            <LandingPageBenefitsListMobile benefits={benefits}/>
        </VStack>
    );
}

const styles = {
    headerSectionTitle: {
        fontWeight: 'bold',
        fontSize: '28px',
        textAlign: 'center',
    }
}

export default LandingPageTopSectionMobile;
