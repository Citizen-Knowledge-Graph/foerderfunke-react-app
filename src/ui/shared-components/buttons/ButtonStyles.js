const buttonStyles = {
    blackOutlined: {
        backgroundColor: "white.main",
        color: "black.main",
        borderColor: "black.main",
        "&:hover": {
            backgroundColor: "black.main",
            color: "white.main",
        },
    },
    whiteNoBorderYellow: {
        backgroundColor: "white.main",
        color: "black.main",
        borderColor: "transparent",
        "&:hover": {
            backgroundColor: "yellow.main",
        },
    },
    blackContained: {
        backgroundColor: "black.main",
        color: "white.main",
        borderColor: "black.main",
        "&:hover": {
            backgroundColor: "yellow.main",
            color: "black.main",
            borderColor: "yellow.main",
        },
    },
    yellowContained: {
        backgroundColor: "yellow.main",
        color: "black.main",
        borderColor: "yellow.main",
        "&:hover": {
            backgroundColor: "black.light",
            color: "white.main",
            borderColor: "black.light",
        },
    },
    whiteOutlinedBlue: {
        backgroundColor: "blue.dark",
        color: "white.main",
        borderColor: "white.main",
        "&:hover": {
            backgroundColor: "yellow.main",
            color: "black.main",
            borderColor: "yellow.main",
        },
    },
    pinkContained: {
        backgroundColor: "pink.main",
        color: "white.main",
        borderColor: "pink.main",
        "&:hover": {
            backgroundColor: "black.main",
            color: "white.main",
            borderColor: "black.main",
        },
    },
    blueMain: {
        backgroundColor: "blue.main",
        color: "black.main",
        borderColor: "blue.main",
        "&:hover": {
            backgroundColor: "white.main",
            color: "blue.main",
            borderColor: "blue.main",
        },
    },
    blueContained: {
        backgroundColor: "blue.dark",
        color: "white.main",
        borderColor: "blue.dark",
        "&:hover": {
            backgroundColor: "white.main",
            color: "blue.dark",
            borderColor: "blue.dark",
        },
    },
    greyContained: {
        backgroundColor: "black.light",
        color: "white.main",
        borderColor: "black.light",
        "&:hover": {
            backgroundColor: "black.main",
            color: "white.main",
            borderColor: "black.main",
        },
    },
    blueHollow: {
        backgroundColor: "blue.dark",
        color: "white.main",
        borderColor: "white.main",
        "&:hover": {
            backgroundColor: "yellow.main",
            color: "black.main",
            borderColor: "yellow.main",
        },
    },
    transparentPink: {
        backgroundColor: "transparent",
        color: "pink.main",
        borderColor: "transparent",
        "&:hover": {
            backgroundColor: "black.main",
            color: "white.main",
            borderColor: "black.main",
        },
    },
    transparentPinkOutlined: {
        backgroundColor: "transparent",
        color: "pink.main",
        borderColor: "pink.main",
        "&:hover": {
            backgroundColor: "black.main",
            color: "white.main",
            borderColor: "black.main",
        },
    },
    transparentBlueOutlined: {
        backgroundColor: "transparent",
        color: "blue.dark",
        borderColor: "blue.main",
        "&:hover": {
            backgroundColor: "blue.main",
            color: "blue.dark",
        },
    },    
    default: {
        backgroundColor: "yellow.main",
        color: "black.main",
        borderColor: "yellow.main",
        "&:hover": {
            backgroundColor: "black.main",
            color: "white.main",
            borderColor: "black.main",
        },
    },
};

export default buttonStyles;
