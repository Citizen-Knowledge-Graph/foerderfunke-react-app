import HStack from "../../../components/HStack";
import {Typography} from "@mui/material";
import VStack from "../../../components/VStack";
import React from "react";
import {useStore} from "../../../components/ViewportUpdater";

const LandingPageSectionTitle = ({ title }) => {
    const isDesktop = useStore((state) => state.isDesktop);

    const fontSize = isDesktop ? '48px' : '32px';

    return (
        <VStack>
            <HStack justifyContent={'center'} sx={{width: '100%'}}>
                <Typography sx={{...styles.titleText, fontSize: fontSize}}>
                    {title}
                </Typography>
            </HStack>
        </VStack>
    )
}

const styles = {
    titleText: {
        fontWeight: 'bold',
        textAlign: 'center',
        paddingBottom: '2px',
        borderBottom: '2px solid rgba(252, 215, 85)',
    }
};

export default LandingPageSectionTitle;
