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
        yellow: {
            main: '#FFEEA6 ',
            light: '#9E872C ',
        },
        blue: {
            main: '#84AAD7',
            dark: '#263046',
        },
        green: {
            main: '#B1EE9B',
        },
        red: {
            main: '#FF0000',
        },
        pink: {
            main: '#F77BB6',
            dark: '#7C1E59',
        },
        black: {
            main: '#26242E',
            light: '#868B8E',
        },
        white: {
            main: '#FFFFFF',
            dark: '#CECECE',
        },
        greyTransparent: {
            main: '#F3F3F3',
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
            colorDeepTeal: '#003F5C',
            colorDeepTealTransparent: 'rgba(0, 63, 92, 0.1)',
        },
    },
    typography: {
        fontFamily: '"Funnel Sans", sans-serif',
        body1: {
            fontSize: '16px',
            lineHeight: '1.5',
            fontWeight: 400,
            color: '#333333',
        },
        body2: {
            fontSize: '14px',
            lineHeight: '1.5',
            fontWeight: 400,
            color: '#333333',
        },
        h4: {
            lineHeight: '1.3',
            color: '#333333',
            fontFamily: '"Funnel Display", sans-serif',
            fontSize: '20px',
            [`@media (max-width:600px)`]: { fontSize: '18px' },
        },
        h3: {
            fontWeight: '500',
            lineHeight: '1.3',
            color: '#333333',
            fontFamily: '"Funnel Display", sans-serif',
            fontSize: '18px',
            [`@media (max-width:600px)`]: { fontSize: '16px' },
        },
        h2: {
            fontWeight: 'bold',
            lineHeight: '1.3',
            color: '#333333',
            fontFamily: '"Funnel Display", sans-serif',
            fontSize: '24px',
            [`@media (max-width:600px)`]: { fontSize: '18px' },
        },
        h1: {
            fontWeight: '500',
            lineHeight: '60px',
            color: '#333333',
            fontFamily: '"Funnel Display", sans-serif',
            fontSize: '48px',
            [`@media (max-width:600px)`]: { fontSize: '32px', lineHeight: '40px' },
        },
        caption: {
            fontSize: '12px',
            fontWeight: 400,
            lineHeight: '1.5',
            color: '#333333',
        },
    },
    shape: { borderRadius: 4 },
    components: {
        MuiButton: {
            styleOverrides: {
                root: {
                    textTransform: 'none',
                    borderRadius: "16px",
                    padding: '12px 20px',
                    fontSize: '18px',
                    fontWeight: '400',
                    fontFamily: '"Funnel Display", sans-serif',
                },
                text: {
                    color: '#26242E',
                    backgroundColor: 'white',
                    '&:hover': {
                        backgroundColor: '#26242E',
                        color: 'white',
                    },
                    '&:active': {
                        backgroundColor: '#26242E',
                        color: 'white',
                    },
                    '&:focus': {
                        backgroundColor: '#26242E',
                        color: 'white',
                    },
                },
                contained: {
                    backgroundColor: '#26242E',
                    color: 'white',
                    boxShadow: 'none',
                    borderWidth: 1,
                    borderColor: '#26242E',
                    borderStyle: 'solid',
                    '&:hover': {
                        backgroundColor: 'white',
                        color: '#26242E',
                        boxShadow: 'none',
                    },
                },
                outlined: {
                    borderColor: '#26242E',
                    color: '#26242E',
                    borderWidth: 1,
                    '&:hover': {
                        backgroundColor: '#26242E',
                        color: 'white',
                        borderColor: '#26242E',
                    },
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