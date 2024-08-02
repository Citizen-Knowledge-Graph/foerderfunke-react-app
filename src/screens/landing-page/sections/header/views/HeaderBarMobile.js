import React, {useState} from 'react';
import MenuIcon from '@mui/icons-material/Menu';
import {Menu, MenuItem, IconButton} from '@mui/material';
import {Link} from 'react-router-dom';

const HeaderBarMobile = () => {
    const [anchorEl, setAnchorEl] = useState(null);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <>
            <IconButton
                aria-controls="simple-menu"
                aria-haspopup="true"
                onClick={handleClick}
            >
                <MenuIcon sx={{ fontSize: '32px' }} />
            </IconButton>
            <Menu
                id="simple-menu"
                anchorEl={anchorEl}
                keepMounted
                open={Boolean(anchorEl)}
                onClose={handleClose}
            >
                <MenuItem component={Link} to="/#how-it-works" onClick={handleClose}>How it works</MenuItem>
                <MenuItem component={Link} to="/#principles" onClick={handleClose}>Principles</MenuItem>
                <MenuItem component={Link} to="/#about-us" onClick={handleClose}>About us</MenuItem>
            </Menu>
        </>
    )
}

export default HeaderBarMobile;
