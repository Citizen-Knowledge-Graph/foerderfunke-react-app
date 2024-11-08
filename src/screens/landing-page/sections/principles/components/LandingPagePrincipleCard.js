import HStack from "../../../../../components/HStack";
import VStack from "../../../../../components/VStack";
import {Typography} from "@mui/material";
import React from "react";
import globalStyles from "../../../../../styles/styles";

const LandingPagePrincipleCard = ({isDesktop, icon, gif, title, text, gifFirst=true}) => {
    const padding = isDesktop ? '24px' : '0px';
    const gifUrl = `${process.env.PUBLIC_URL}/assets/images/landing-page/${gif}.gif`; // Construct your GIF URL

    const DynamicStacker = ({children}) => {
        if (isDesktop) {
            return (
                <HStack alignItems={'center'}>
                    {children}
                </HStack>
            )
        }

        return (
            <VStack gap={2} sx={{flex: 1}}>
                {children}
            </VStack>
        )
    }

    const GifComponent = () => {
        return (
            <HStack justifyContent={'center'}>
                {gif ? (
                    <img src={gifUrl} alt="gif" style={{width: '140px', height: '140px', borderRadius: '4px'}}/>
                ) : (
                    React.createElement(icon, {sx: {fontSize: 120, color: globalStyles.secondaryColor}})
                )}
            </HStack>
        )
    }

    const TextComponent = () => {
        return (
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
        )
    }

    return (
        <DynamicStacker gap={2} sx={{flex: 1}}>
            {
                !isDesktop || gifFirst ? (
                    <>
                        <GifComponent/>
                        <TextComponent/>
                    </>
                ) : (
                    <>
                        <TextComponent/>
                        <GifComponent/>
                    </>
                )
            }
        </DynamicStacker>
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
