import React from "react";
import {Link} from "react-router-dom";
import Typography from "@mui/material/Typography";

const NarBarLink = ({ to, title }) => {
    return (
        <Link to={to} style={styles.navbarLink}>
            <Typography sx={styles.navbarItemText}>
                {title}
            </Typography>
        </Link>
    )
}

const styles = {
    navbarItemText: {
        fontSize: '18px',
    },
    navbarLink: {
        textDecoration: 'none',
        color: 'inherit'
    }
}

export default NarBarLink;
