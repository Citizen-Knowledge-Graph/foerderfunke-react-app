import HStack from "../../../components/HStack";
import {Typography} from "@mui/material";
import VStack from "../../../components/VStack";
import React from "react";

const LandingPageSectionTitle = ({ title }) => {
    return (
        <VStack>
            <HStack justifyContent={'center'} sx={{width: '100%'}}>
                <Typography sx={styles.titleText}>
                    {title}
                </Typography>
            </HStack>
        </VStack>
    )
}

const styles = {
    titleText: {
        fontWeight: 'bold',
        fontSize: '48px',
        textAlign: 'center',
        paddingBottom: '2px',
        borderBottom: '2px solid rgba(252, 215, 85)',
    }
};

export default LandingPageSectionTitle;
