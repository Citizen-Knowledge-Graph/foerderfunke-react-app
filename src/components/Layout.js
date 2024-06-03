import React from 'react';
import {Box, AppBar, Toolbar, IconButton, Typography, Container} from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import {useNavigate} from 'react-router-dom';
import { useStore } from './ViewportUpdater';

const Layout = ({children}) => {
    const navigate = useNavigate();
    const isDesktop = useStore((state) => state.isDesktop);

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
        paddingLeft: isDesktop ? '40px' : '30px',
        paddingRight: isDesktop ? '40px' : '30px',
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
            <Container sx={contentContainerStyle} data-testid="main-parent container">
                {children}
            </Container>
        </Box>
    );
};

export default Layout;
