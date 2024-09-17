import React from "react";
import {Typography} from "@mui/material";
import VStack from "../../../../../components/VStack";
import LandingPageWAppButton from "../../../components/LandingPageWAppButton";
import LandingPageBenefitsListMobile from "../components/LandingPageBenefitsListMobile";
import useTranslation from "../../../../../language/useTranslation";

const LandingPageTopSectionMobile = ({benefits}) => {
    const { t } = useTranslation();

    return (
        <VStack>
            <VStack alignItems={'center'}>
                <Typography sx={styles.headerSectionTitle}>
                    {t('hero.header')}
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
        fontSize: '32px',
        textAlign: 'center',
    }
}

export default LandingPageTopSectionMobile;
