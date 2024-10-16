import React from "react";
import HStack from "./HStack";
import {Typography} from "@mui/material";

const LogoBar = ({size = 'large', secondary = false}) => {
    const logoUrl =`${process.env.PUBLIC_URL}/assets/images/logos/FF_logo_round.svg`;

    const styles = (() => {
        switch (size) {
            case 'small':
                return {
                    img: {
                        height: '50px'
                    },
                    title: {
                        fontSize: '24px',
                        fontWeight: 'bold',
                    }
                }
            case 'large':
                return {
                    img: {
                        height: '65px'
                    },
                    title: {
                        fontSize: '28px',
                        fontWeight: 'bold',
                    }
                };
            default:
                return null
        }
    })();

    return (
        <HStack alignItems={'center'}>
            <img src={logoUrl} alt="logo" style={{height: styles.img.height}}/>
            <Typography sx={styles.title}>
                FörderFunke
            </Typography>
        </HStack>
    );
}

export default LogoBar;
