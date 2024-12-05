import { createTheme } from '@mui/material/styles';

const theme = createTheme({
    palette: {
        primary: {
            main: '#FCD755',
            light: 'rgba(252, 215, 85, 0.2)',
            dark: '#d3d3d3',
        },
        secondary: {
            main: '#0BAF12',
            light: 'rgba(11, 175, 18, 0.2)',
        },
        error: {
            main: '#FF0000',
            light: 'rgba(255, 0, 0, 0.2)',
        },
        custom: {
            amberOrange: '#FFA600',
            amberOrangeTransparent: 'rgba(255, 166, 0, 0.1)',
            tangerineOrange: '#FF8531',
            tangerineOrangeTransparent: 'rgba(255, 133, 49, 0.1)',
            plumPurple: '#BC5090',
            plumPurpleTransparent: 'rgba(188, 80, 144, 0.1)',
            darkGrey: '#333333',
            darkGreyTransparent: 'rgba(51, 51, 51, 0.1)',
            lightGrey: '#BDBDBD',
            lightGreyTransparent: 'rgba(189, 189, 189, 0.1)',
        },
    },
    typography: {
        fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
        body1: {
            fontSize: '16px',
            color: '#333333',
        },
        body2: {
            fontSize: '14px',
            color: '#333333',
        },
    },
    components: {
        MuiButton: {
            styleOverrides: {
                root: {
                    textTransform: 'none',
                    borderRadius: 8,
                },
            },
        },
        MuiTypography: {
            styleOverrides: {
                root: {
                    color: 'black',
                },
            },
        },
    },
});

export default theme;
