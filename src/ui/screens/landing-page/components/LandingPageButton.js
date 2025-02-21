import React from "react";
import {Button} from "@mui/material";
import {Link} from "react-router-dom";
import HStack from "../../../shared-components/HStack";
import globalStyles from "../../../styles/styles";

const LandingPageHollowButton = ({text='Help us improve', to}) => {

    return (
        <HStack>
            <Button variant="text" sx={styles.button}
                    component={Link}
                    to={to}>{text}</Button>
        </HStack>
    );
}

const styles = {
    button: {
        borderRadius: '4px',
        borderStyle: 'solid',
        borderWidth: '1px',
        borderColor:"white",
        padding: '4px 12px',
        color: globalStyles.colorDarkGrey,
        fontSize: '20px',
        fontWeight: 'bold',
        textTransform: 'none',
        '&:hover': {
            backgroundColor: globalStyles.primaryColor,
        }
    }
}

export default LandingPageHollowButton;
