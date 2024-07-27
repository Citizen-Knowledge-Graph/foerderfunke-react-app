import React from 'react';
import Typography from '@mui/material/Typography';
import HStack from "../../HStack";
import {Link} from "react-router-dom";

const HeaderBarDesktop = () => {
    return (
        <HStack gap={5}>
            <HStack justifyContent={'center'} alignItems={'center'}>
                <Link to="/#how-it-works" style={styles.navbarLink}>
                    <Typography sx={styles.navbarItemText}>
                        How it works
                    </Typography>
                </Link>
                <Link to="/#principles" style={styles.navbarLink}>
                    <Typography sx={styles.navbarItemText}>
                        Principles
                    </Typography>
                </Link>
                <Link to="/#about-us" style={styles.navbarLink}>
                    <Typography sx={styles.navbarItemText}>
                        About us
                    </Typography>
                </Link>
                <Link to="/#find-your-benefits" style={styles.navbarLink}>
                    <Typography sx={styles.navbarItemText}>
                        Find your benefits
                    </Typography>
                </Link>
            </HStack>
            <Typography>
                EN/DE
            </Typography>
        </HStack>
    )
}

const styles = {
    navbarItemText: {
        fontSize: '18px',
    }
}

export default HeaderBarDesktop;
