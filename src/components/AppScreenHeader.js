import React from "react";
import {Button} from "@mui/material";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import {useNavigate} from "react-router-dom";
import HStack from "./HStack";

const AppScreenHeader = () => {
    const navigate = useNavigate();  // Initialize the navigate function

    return (
        <HStack justifyContent={'flex-start'} sx={{width: '100%'}}>
            <Button
                variant="text"
                sx={styles.button}
                startIcon={<ChevronLeftIcon />}
                onClick={() => navigate(-1)}  // Navigate back on click
            >Back</Button>
        </HStack>
    );
}

const styles = {
    button: {
        color: 'black',
        fontSize: 16,
    }
}

export default AppScreenHeader;
