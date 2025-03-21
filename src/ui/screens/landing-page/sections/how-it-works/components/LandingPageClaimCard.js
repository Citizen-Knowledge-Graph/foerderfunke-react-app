import React from "react";
import VStack from "../../../../../shared-components/VStack";
import HStack from "../../../../../shared-components/HStack";
import {Typography} from "@mui/material";
import {green} from "@mui/material/colors";
import LandingPageWAppButton from "../../../components/LandingPageWAppButton";


const LandingPageClaimCard = () => {

    return (
        <VStack alignItems={'center'} sx={{width: "100%"}}>
            <VStack gap={5} sx={styles.infoCard}>
                <VStack alignItems={'center'}>
                    <HStack>
                        <Typography sx={styles.titleText}>
                            Find benefits and support programmes for you!
                        </Typography>
                    </HStack>
                </VStack>
                <HStack justifyContent={'center'} sx={{width: '100%'}}>
                    <LandingPageWAppButton/>
                </HStack>
            </VStack>
        </VStack>
    )
}

const styles = {
    infoCard: {
        maxWidth: '840px',
        borderRadius: '4px',
        backgroundColor: green[500],
        padding: '32px 16px 32px 16px',
        boxShadow: '2px 2px 4px 2px rgba(0, 0, 0, 0.2)',
    },
    titleText: {
        fontWeight: 'bold',
        fontSize: '28px',
        color: 'white',
        textAlign: 'center',
    }
};

export default LandingPageClaimCard;
