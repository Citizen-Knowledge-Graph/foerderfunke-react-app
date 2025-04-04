import React from "react";
import { Button } from "@mui/material";
import { Link } from "react-router-dom";
import useTranslation from "@/ui/language/useTranslation";

const RegularButton = ({
    variant,
    text='home.global.actionButton',
    link=null,
    onClick=null
}) => {
    const { t } = useTranslation();

    const buttonStyles = {
        blackOutlined: {
            backgroundColor: 'white.main',
            color: 'black.main',
            borderColor: 'black.main',
            '&:hover': {
                backgroundColor: 'black.main',
                color: 'white.main'
            }
        },
        blackContained: {
            backgroundColor: 'black.main',
            color: 'white.main',
            borderColor: 'black.main',
            '&:hover': {
                backgroundColor: 'yellow.main',
                color: 'black.main',
                borderColor: 'yellow.main'
            }
        },
        yellowContained: {
            backgroundColor: 'yellow.main',
            color: 'black.main',
            borderColor: 'yellow.main',
            '&:hover': {
                backgroundColor: 'black.main',
                color: 'white.main',
                borderColor: 'black.main'
            }
        },
        whiteOutlinedBlue: {
            backgroundColor: 'blue.dark',
            color: 'white.main',
            borderColor: 'white.main',
            '&:hover': {
                backgroundColor: 'yellow.main',
                color: 'black.main',
                borderColor: 'yellow.main'
            }
        },
        pinkContained: {
            backgroundColor: 'pink.main',
            color: 'black.main',
            borderColor: 'pink.main',
            '&:hover': {
                backgroundColor: 'black.main',
                color: 'white.main',
                borderColor: 'black.main'
            }
        },
        blueContained: {
            backgroundColor: 'blue.dark',
            color: 'white.main',
            borderColor: 'blue.dark',
            '&:hover': {
                backgroundColor: 'white.main',
                color: 'blue.dark',
                borderColor: 'blue.dark'
            }
        },
        greyContained: {
            backgroundColor: 'black.light',
            color: 'white.main',
            borderColor: 'black.light',
            '&:hover': {
                backgroundColor: 'black.main',
                color: 'white.main',
                borderColor: 'black.main'
            }
        },
        blueHollow: {
            backgroundColor: 'blue.dark',
            color: 'white.main',
            borderColor: 'white.main',
            '&:hover': {
                backgroundColor: 'yellow.main',
                color: 'black.main',
                borderColor: 'yellow.main'
            }
        },
        default: {
            backgroundColor: 'yellow.main',
            color: 'black.main',
            borderColor: 'yellow.main',
            '&:hover': {
                backgroundColor: 'black.main',
                color: 'white.main',
                borderColor: 'black.main'
            }
        }
    };

    return (
        <Button
            variant="contained"
            sx={{...buttonStyles[variant] || buttonStyles.default}}
            component={Link}
            to={link}
            onClick={onClick}
        >
            {t(text)}
        </Button>
    );
};

export default RegularButton;