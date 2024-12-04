import React from "react";
import {Button} from "@mui/material";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import HStack from "./HStack";
import useTranslation from "../language/useTranslation";

const TemplateViewHeader = ({onClick}) => {
    const { t } = useTranslation();
    return (
        <HStack justifyContent={'flex-start'} sx={{width: '100%'}}>
            <Button
                variant="text"
                sx={styles.button}
                startIcon={<ChevronLeftIcon data-testid="chevron-left-icon"/>}
                onClick={onClick}
            >{t('app.nav.backBtn')}</Button>
        </HStack>
    );
}

const styles = {
    button: {
        color: 'black',
        fontSize: 16,
    }
}

export default TemplateViewHeader;
