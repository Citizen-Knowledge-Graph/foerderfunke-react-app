import React from "react";
import {Button, Card, CardContent, Typography} from "@mui/material";
import {Link} from "react-router-dom";
import HStack from "../../../components/HStack";
import globalStyles from "../../../styles/styles";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";

const LandingPageWAppButton = ({backgroundColor}) => {
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
        <Button variant="text" sx={{...styles.button, backgroundColor: buttonColor, color: textColor}} component={Link}
                to="/info-privacy">Try FörderFunke</Button>
    );
}

const styles = {
    button: {
        borderRadius: '12px',
        color: 'black',
        fontSize: '20px',
        fontWeight: 'bold',
        textTransform: 'none'
    }
}

export default LandingPageWAppButton;
