import VStack from "../../../components/VStack";
import {Typography} from "@mui/material";
import HStack from "../../../components/HStack";
import React from "react";

const LandingPageTeam = () => {
    const quickCheckImage = `${process.env.PUBLIC_URL}/assets/images/quick-check-v2.jpg`;

    return (
        <VStack sx={styles.principlesContainer} gap={7}>
            <HStack justifyContent={'center'} sx={{padding: "16px"}}>
                <Typography sx={styles.headerSectionTitle}>
                    Let's connect
                </Typography>
            </HStack>
            <VStack sx={{width: "100%"}}>
                <HStack justifyContent={'center'}>
                    <HStack justifyContent={'center'} sx={{width: '200px', height: '200px', overflow: 'hidden'}}>
                        <img src={quickCheckImage} alt="Landing Page"
                             style={{width: "100%", height: "auto", borderRadius: "50%"}}/>
                    </HStack>
                </HStack>
                <HStack justifyContent={'center'}>
                    <VStack gap={1}>
                        <Typography sx={styles.itemTitle}>
                            Benjamin Degenhart
                        </Typography>
                        <Typography sx={styles.itemText}>
                            Knowledge Engineer
                        </Typography>
                        <Typography sx={styles.itemText}>
                            benjamin.degenhart@foerderfunke.org
                        </Typography>
                        <Typography sx={styles.itemText}>
                            LinkedIn
                        </Typography>
                    </VStack>
                </HStack>
            </VStack>
            <VStack>
                <HStack justifyContent={'center'}>
                    <HStack justifyContent={'center'} sx={{width: '200px', height: '200px', overflow: 'hidden'}}>
                        <img src={quickCheckImage} alt="Landing Page"
                             style={{width: "100%", height: "auto", borderRadius: "50%"}}/>
                    </HStack>
                </HStack>
                <HStack justifyContent={'center'}>
                    <VStack gap={1}>
                        <Typography sx={styles.itemTitle}>
                            Vanessa Espinosa
                        </Typography>
                        <Typography sx={styles.itemText}>
                            Service & UX-Designer
                        </Typography>
                        <Typography sx={styles.itemText}>
                            vanessa.espinosa@foerderfunke.org
                        </Typography>
                        <Typography sx={styles.itemText}>
                            LinkedIn
                        </Typography>
                    </VStack>
                </HStack>
            </VStack>
            <VStack>
                <HStack justifyContent={'center'}>
                    <HStack justifyContent={'center'} sx={{width: '200px', height: '200px', overflow: 'hidden'}}>
                        <img src={quickCheckImage} alt="Landing Page"
                             style={{width: "100%", height: "auto", borderRadius: "50%"}}/>
                    </HStack>
                </HStack>
                <HStack justifyContent={'center'}>
                    <VStack gap={1}>
                        <Typography sx={styles.itemTitle}>
                            Ben Gläser
                        </Typography>
                        <Typography sx={styles.itemText}>
                            Software Engineer
                        </Typography>
                        <Typography sx={styles.itemText}>
                            ben.glaeser@foerderfunke.org
                        </Typography>
                        <Typography sx={styles.itemText}>
                            LinkedIn
                        </Typography>
                    </VStack>
                </HStack>
            </VStack>
        </VStack>
    )

}

const styles = {
    principlesContainer: {
        width: "100%",
        padding: "16px",
    },
    headerSectionTitle: {
        fontWeight: 'bold',
        fontSize: '32px',
        textAlign: 'center',
    },
    itemTitle: {
        fontWeight: 'bold',
        fontSize: '24px',
        textAlign: 'center',
    },
    itemText: {
        fontSize: '16px',
        textAlign: 'center',
    }
}

export default LandingPageTeam;
