import React from "react";
import { Link } from "react-router-dom";
import { Button, IconButton } from "@mui/material";
import { useNavigate } from "react-router-dom";
import useTranslation from "../language/useTranslation";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import { HBox } from "./LayoutBoxes";
import theme from "../../theme";
import HomeIcon from '@mui/icons-material/Home';

const AppScreenHeader = ({ back, home }) => {
    const navigate = useNavigate();
    const { t } = useTranslation();

    return (
        <HBox justifyContent={'space-between'} sx={{ width: '100%' }}>
            {back ? <Button
                sx={{
                    color: "black",
                    '&:hover': {
                        backgroundColor: theme.palette.custom.lightGrey,
                    },
                }}
                startIcon={<ChevronLeftIcon data-testid="chevron-left-icon" />}
                onClick={() => navigate(-1)}
            >{t('app.nav.backBtn')}</Button> : <div />}
            {home &&
                <IconButton
                    component={Link}
                    to='/'
                    sx={{
                        width: 40,
                        height: 40,
                        '&:hover': {
                            backgroundColor: theme.palette.custom.lightGrey,
                        },
                    }}
                >
                    <HomeIcon sx={{ fontSize: 20, color: 'black' }} />
                </IconButton>}
        </HBox>
    );
}

export default AppScreenHeader;
