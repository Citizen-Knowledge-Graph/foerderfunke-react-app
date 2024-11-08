import React from "react";
import {Button} from "@mui/material";
import {Link} from "react-router-dom";
import globalStyles from "../../../styles/styles";
import HStack from "../../../components/HStack";
import useTranslation from "../../../language/useTranslation";

const LandingPageWAppButton = ({backgroundColor}) => {
    const { t } = useTranslation();

    const buttonColor = (() => {
        switch (backgroundColor) {
            case 'primary':
                return globalStyles.primaryColor;
            case 'secondary':
                return globalStyles.secondaryColor;
            default:
                return 'white'
        }
    })();

    const textColor = (() => {
        switch (backgroundColor) {
            case 'primary':
                return 'black';
            case 'secondary':
                return 'white';
            default:
                return 'black'
        }
    })();

    return (
        <HStack>
            <Button variant="text" sx={{...styles.button, backgroundColor: buttonColor, color: textColor}}
                    component={Link}
                    to="/user-routing">{t('home.global.actionButton')}</Button>
        </HStack>
    );
}

const styles = {
    button: {
        borderRadius: '12px',
        padding: '4px 12px',
        color: 'black',
        fontSize: '20px',
        fontWeight: 'bold',
        textTransform: 'none',
        borderStyle: 'solid',
        borderWidth: '1px',
        borderColor: globalStyles.primaryColor,
        '&:hover': {
            backgroundColor: globalStyles.primaryColor,
        },
    }
}

export default LandingPageWAppButton;
