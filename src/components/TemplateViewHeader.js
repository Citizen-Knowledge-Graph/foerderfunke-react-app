import React from "react";
import {Button} from "@mui/material";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import HStack from "./HStack";

const TemplateViewHeader = ({onClick}) => {
    return (
        <HStack justifyContent={'flex-start'} sx={{width: '100%'}}>
            <Button
                variant="text"
                sx={styles.button}
                startIcon={<ChevronLeftIcon />}
                onClick={onClick}
            >Back</Button>
        </HStack>
    );
}

const styles = {
    button: {
        color: 'black',
        fontSize: 12,
    }
}

export default TemplateViewHeader;
