import React from "react";
import HStack from "./HStack";
import {Typography} from "@mui/material";

const LogoBar = ({size='large'}) => {
    const quickCheckImage = `${process.env.PUBLIC_URL}/assets/images/logos/FF_logo.svg`;

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
                        height: '75px'
                    },
                    title: {
                        fontSize: '32px',
                        fontWeight: 'bold',
                    }
                };
            default:
                return null
        }
    })();

    return (
        <HStack alignItems={'center'}>
            <img src={quickCheckImage} alt="logo" style={{height: styles.img.height}}/>
            <Typography sx={styles.title}>
                FörderFunke
            </Typography>
        </HStack>
    );
}

export default LogoBar;
