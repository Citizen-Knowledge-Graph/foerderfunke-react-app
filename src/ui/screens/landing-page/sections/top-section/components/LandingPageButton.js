import React from "react";
import { Button } from "@mui/material";
import { HBox } from "../../../../../shared-components/LayoutBoxes";
import { Link } from "react-router-dom";
import useTranslation from "../../../../../language/useTranslation";

const LandingPageButton = ({ variant }) => {
    const { t } = useTranslation();

    const buttonStyles = {
        blackHollow: {
            backgroundColor: 'white.main',
            color: 'black.main',
            borderColor: 'black.main',
            '&:hover': {
                backgroundColor: 'black.main',
                color: 'white.main'
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
        <HBox sx={{ gap: 2, marginTop: 2, justifyContent: "flex-start" }}>
            <Button
                variant="contained"
                sx={buttonStyles[variant] || buttonStyles.default}
                component={Link}
                to="/user-routing"
            >
                {t('home.global.actionButton')}
            </Button>
        </HBox>
    );
};

export default LandingPageButton;