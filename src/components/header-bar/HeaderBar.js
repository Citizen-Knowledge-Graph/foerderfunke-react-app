import React from "react";
import HStack from "../HStack";
import {Link} from "react-router-dom";
import {AppBar, Typography} from "@mui/material";
import HeaderBarMobile from "./views/HeaderBarMobile";
import HeaderBarDesktop from "./views/HeaderBarDesktop";

const HeaderBar = ({isDesktop, logo = true, back = null}) => {
    //const navigate = useNavigate();
    const horizontalPadding = isDesktop ? '60px' : '16px';
    const quickCheckImage = `${process.env.PUBLIC_URL}/assets/images/logos/FF_logo.svg`;

    return (
        <AppBar position="static"
                sx={{...styles.navbarStyle, paddingRight: horizontalPadding, paddingLeft: horizontalPadding}}>
            <HStack justifyContent={'space-between'} alignItems={'center'} sx={{width: '100%'}}>
                <HStack alignItems={'center'}>
                    <Link to={"/"} style={{textDecoration: 'none', color: "black", width: '100%'}}>
                        <HStack alignItems={'center'} sx={{padding: '0px'}}>
                            <img src={quickCheckImage} alt="logo" style={{height: '50px'}}/>
                            <Typography sx={styles.logoText}>
                                FörderFunke
                            </Typography>
                        </HStack>
                    </Link>
                </HStack>
                {isDesktop ? <HeaderBarDesktop/> : <HeaderBarMobile/>}
            </HStack>
        </AppBar>
    )
}

const styles = {
    navbarStyle: {
        display: 'flex',
        flexDirection: 'row',
        backgroundColor: 'white',
        boxShadow: 'none',
        color: 'black',
        height: '10vh',
    },
    logoText: {
        fontSize: '32px',
        fontWeight: 'bold',
    }
}

export default HeaderBar;
