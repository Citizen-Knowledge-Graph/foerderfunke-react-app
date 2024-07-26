import VStack from "../../../components/VStack";
import HStack from "../../../components/HStack";
import {Typography} from "@mui/material";
import {green} from "@mui/material/colors";
import React from "react";

const LandingPagePFCard = () => {
    const quickCheckImage = `${process.env.PUBLIC_URL}/assets/images/quick-check-v2.jpg`;

    return (
        <VStack gap={0} sx={{width: '100%'}}>
            <VStack gap={3} sx={styles.infoCard}>
                <VStack gap={1}>
                    <HStack>
                        <Typography sx={styles.titleText}>
                            Supported by
                        </Typography>
                    </HStack>
                    <HStack>
                        <Typography sx={styles.subTitleText}>
                            We are part of the 15th round of the Prototype Fund until the beginning of September 2024.
                        </Typography>
                    </HStack>
                </VStack>
                <VStack>
                    <HStack justifyContent={'center'}>
                        <HStack justifyContent={'center'} sx={{width: '150px', height: '150px', overflow: 'hidden'}}>
                            <img src={quickCheckImage} alt="Landing Page"
                                 style={{width: "100%", height: "auto", borderRadius: "50%"}}/>
                        </HStack>
                        <HStack justifyContent={'center'} sx={{width: '150px', height: '150px', overflow: 'hidden'}}>
                            <img src={quickCheckImage} alt="Landing Page"
                                 style={{width: "100%", height: "auto", borderRadius: "50%"}}/>
                        </HStack>
                    </HStack>
                </VStack>
            </VStack>
        </VStack>
    );
}

const styles = {
    infoCard: {
        borderRadius: '15px',
        borderStyle: 'solid',
        borderWidth: '1px',
        borderColor: green[500],
        padding: '16px',
        boxShadow: '2px 2px 4px 2px rgba(0, 0, 0, 0.2)',
    },
    titleText: {
        fontWeight: 'bold',
        fontSize: '24px',
        color: green[500],
    },
    subTitleText: {
        fontSize: '18px',
    }
};

export default LandingPagePFCard;
