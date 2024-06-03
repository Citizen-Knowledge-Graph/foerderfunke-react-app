import React from 'react';
import {Box, AppBar, Toolbar, IconButton, Typography, Container} from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import {useNavigate} from 'react-router-dom';
import useMediaQuery from '@mui/material/useMediaQuery';

const Layout = ({children}) => {
    const navigate = useNavigate();
    const isDesktop = useMediaQuery(theme.breakpoints.up('md'));

    // Styles for navbar container
    const navbarStyle = {
        backgroundColor: 'white',
        boxShadow: 'none',
        color: 'black'
    };

    // Styles for the layout container
    const layoutContainerStyle = {
        display: 'flex',
        flexDirection: 'column',
        height: '100vh',
    };

    // Styles for the content container to fill the remaining space
    const contentContainerStyle = {
        flex: 1,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'flex-start',
        padding: isDesktop ? '20px' : '10px',
    };

    return (
        <Box sx={layoutContainerStyle}>
            <AppBar position="static" sx={navbarStyle}>
                <Toolbar>
                    <IconButton edge="start" color="inherit" aria-label="back" onClick={() => navigate(-1)}>
                        <ArrowBackIcon/>
                    </IconButton>
                    <Typography variant="h6" component="div" sx={{flexGrow: 1}}>
                        Zurück
                    </Typography>
                </Toolbar>
            </AppBar>
            <Container sx={contentContainerStyle}>
                {children}
            </Container>
        </Box>
    );
};

export default Layout;
