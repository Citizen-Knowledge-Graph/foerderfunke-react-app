import React from 'react';
import {Box, AppBar, Toolbar, IconButton, Typography, Container} from '@mui/material';
import ArrowBackIosNewOutlinedIcon from '@mui/icons-material/ArrowBackIosNewOutlined';
import {useNavigate} from 'react-router-dom';
import {useStore} from './ViewportUpdater';

const Layout = ({children}) => {
        const navigate = useNavigate();
        const isDesktop = useStore((state) => state.isDesktop);

        return (
            <Box sx={{
                ...styles.layoutContainerStyle,
                paddingLeft: isDesktop ? '40px' : '20px',
                paddingRight: isDesktop ? '40px' : '20px',
            }}>
                <Container sx={{padding: '0px', width: isDesktop ? '40vw' : null}}>
                    <AppBar position="static" sx={styles.navbarStyle}>
                        <Toolbar sx={{padding: '0px'}}>
                            <IconButton edge="start" color="inherit" aria-label="back" onClick={() => navigate(-1)}>
                                <ArrowBackIosNewOutlinedIcon/>
                            </IconButton>
                            <Typography variant="h6" component="div" sx={{flexGrow: 1}}>
                                Zurück
                            </Typography>
                        </Toolbar>
                    </AppBar>
                    <Container sx={styles.contentContainerStyle} data-testid="main-parent container">
                        {children}
                    </Container>
                </Container>
            </Box>
        )
            ;
    }
;

const styles = {
    layoutContainerStyle: {
        display: 'flex',
        flexDirection: 'column',
        minHeight: '100vh',
        overflow: 'hidden',
    },
    navbarStyle: {
        display: 'flex',
        flexDirection: 'row',
        backgroundColor: 'white',
        boxShadow: 'none',
        color: 'black',
        height: '10vh',
    },
    contentContainerStyle: {
        flex: 1,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'flex-start',
        gap: '20px',
        padding: '0px'
    }
}

export default Layout;
