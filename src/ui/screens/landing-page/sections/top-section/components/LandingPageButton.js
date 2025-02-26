import React from "react";
import { Button } from "@mui/material";
import { HBox } from "../../../../../shared-components/LayoutBoxes";
import theme from "../../../../../../theme";
import { Link } from "react-router-dom";
import useTranslation from "../../../../../language/useTranslation";

const LandingPageButton = ({ variant }) => {
    const { t } = useTranslation();

    const buttonStyles = {
        blueHollow: {
            backgroundColor: theme.palette.blue.dark,
            color: theme.palette.white.main,
            borderColor: theme.palette.white.main,
            '&:hover': {
                backgroundColor: theme.palette.yellow.main,
                color: theme.palette.black.main,
                borderColor: theme.palette.yellow.main
            }
        },
        default: {
            backgroundColor: theme.palette.yellow.main,
            color: theme.palette.black.main,
            borderColor: theme.palette.yellow.main,
            '&:hover': {
                backgroundColor: theme.palette.black.main,
                color: theme.palette.white.main,
                borderColor: theme.palette.black.main
            }
        }
    };

    return (
        <HBox sx={{ gap: theme.spacing(2), marginTop: theme.spacing(2), justifyContent: "flex-start" }}>
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