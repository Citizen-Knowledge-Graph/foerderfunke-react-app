import React from "react";
import {Typography} from "@mui/material";
import VStack from "../../../../../components/VStack";
import HStack from "../../../../../components/HStack";

const LandingPageTopSectionMobile = () => {
    return (
        <VStack>
            <HStack justifyContent={'center'}>
                <Typography sx={styles.headerSectionTitle}>
                    Mobile view
                </Typography>
            </HStack>
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
