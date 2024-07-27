import React from "react";
import {Typography} from "@mui/material";
import VStack from "../../../../../components/VStack";
import HStack from "../../../../../components/HStack";

const LandingPageHowItWorksDesktop = () => {
    return (
        <VStack>
            <HStack justifyContent={'center'} sx={{width: '100%'}}>
                <Typography sx={styles.subTitleText}>
                    That's how it works
                </Typography>
            </HStack>
            <HStack justifyContent={'center'} sx={{width: '100%'}}>
                <Typography sx={styles.titleText}>
                    The easy-peasy way to find social benefits for you
                </Typography>
            </HStack>
        </VStack>
    )
}

const styles = {
    titleText: {
        fontWeight: 'bold',
        fontSize: '36px',
    },
    subTitleText: {
        fontSize: '30px',
    }
};

export default LandingPageHowItWorksDesktop;
