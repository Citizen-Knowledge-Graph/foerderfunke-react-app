import HStack from "../../../../../components/HStack";
import {green} from "@mui/material/colors";
import VStack from "../../../../../components/VStack";
import {Typography} from "@mui/material";
import React from "react";

const LandingPagePrincipleCard = ({ isDesktop, icon, title, text }) => {
    const padding = isDesktop ? '24px' : '0px';

    return (
        <VStack gap={2} sx={{flex: 1}}>
            <HStack justifyContent={'center'}>
                {React.createElement(icon, { sx: { fontSize: 120, color: green[500] } })}
            </HStack>
            <VStack gap={1} sx={{padding: padding}}>
                <HStack>
                    <Typography sx={styles.itemHeaderText}>
                        {title}
                    </Typography>
                </HStack>
                <HStack>
                    <Typography sx={styles.itemText}>
                        {text}
                    </Typography>
                </HStack>
            </VStack>
        </VStack>
    )
}

const styles = {
    itemHeaderText: {
        fontWeight: 'bold',
        fontSize: '28px',
        textAlign: 'left',
    },
    itemText: {
        fontSize: '20px',
    }
}

export default LandingPagePrincipleCard;
