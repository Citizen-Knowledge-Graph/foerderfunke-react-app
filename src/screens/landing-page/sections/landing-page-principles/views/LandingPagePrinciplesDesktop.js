import {Typography} from "@mui/material";
import VStack from "../../../../../components/VStack";
import HStack from "../../../../../components/HStack";
import React from "react";
import SecurityIcon from "@mui/icons-material/Security";
import {green} from "@mui/material/colors";
import OpenWithIcon from "@mui/icons-material/OpenWith";
import FaceIcon from "@mui/icons-material/Face";

const LandingPagePrinciplesDesktop = () => {
    return (
        <VStack gap={5}>
            <HStack justifyContent={'center'} sx={{width: '100%'}}>
                <Typography sx={styles.titleText}>
                    Our Principles
                </Typography>
            </HStack>
            <HStack justifyContent={'center'} sx={{width: '100%'}}>
                <VStack gap={3} sx={{flex: 1}}>
                    <HStack justifyContent={'center'}>
                        <SecurityIcon sx={{fontSize: 120, color: green[500]}}/>
                    </HStack>
                    <VStack gap={1} sx={{padding: '40px'}}>
                        <HStack>
                            <Typography sx={styles.itemHeaderText}>
                                Privacy By Design
                            </Typography>
                        </HStack>
                        <HStack>
                            <Typography sx={styles.itemText}>
                                It is important to us that you maintain control over your data. That's why your data
                                always
                                remains encrypted on your end device.
                            </Typography>
                        </HStack>
                    </VStack>
                </VStack>
                <VStack gap={3} sx={{flex: 1}}>
                    <HStack justifyContent={'center'}>
                        <OpenWithIcon sx={{fontSize: 120, color: green[500]}}/>
                    </HStack>
                    <VStack gap={1} sx={{padding: '40px'}}>
                        <HStack>
                            <Typography sx={styles.itemHeaderText}>
                                Open Data
                            </Typography>
                        </HStack>
                        <HStack>
                            <Typography sx={styles.itemText}>
                                Important information for citizens about their benefits is all too often difficult to
                                find.
                                We make our catalogue of conditions for social benefits publicly available.
                            </Typography>
                        </HStack>
                    </VStack>
                </VStack>
                <VStack gap={3} sx={{flex: 1}}>
                    <HStack justifyContent={'center'}>
                        <FaceIcon sx={{fontSize: 120, color: green[500]}}/>
                    </HStack>
                    <VStack gap={1} sx={{padding: '40px'}}>
                        <HStack>
                            <Typography sx={styles.itemHeaderText}>
                                User Centric Design
                            </Typography>
                        </HStack>
                        <HStack>
                            <Typography sx={styles.itemText}>
                                We work in a user-centered and iterative way. We talk with users and constantly improve
                                our
                                product so that it is easy to use, understandable and accessible.
                            </Typography>
                        </HStack>
                    </VStack>
                </VStack>
            </HStack>
        </VStack>
    );
}

const styles = {
    titleText: {
        fontWeight: 'bold',
        fontSize: '36px',
        textAlign: 'center',
    },
    itemHeaderText: {
        fontWeight: 'bold',
        fontSize: '28px',
        textAlign: 'left',
    },
    itemText: {
        fontSize: '20px',
    }
};

export default LandingPagePrinciplesDesktop;
