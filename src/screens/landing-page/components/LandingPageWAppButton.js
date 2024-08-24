import React from "react";
import {Button} from "@mui/material";
import {Link} from "react-router-dom";
import globalStyles from "../../../styles/styles";

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
                to="/user-routing">Discover benefits</Button>
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
