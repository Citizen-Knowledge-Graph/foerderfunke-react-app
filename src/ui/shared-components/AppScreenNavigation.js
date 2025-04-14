import React from "react";
import { Link } from "react-router-dom";
import { Button, IconButton } from "@mui/material";
import { useNavigate } from "react-router-dom";
import useTranslation from "@/ui/language/useTranslation";
import { HBox } from "./LayoutBoxes";
import HomeIcon from '@mui/icons-material/Home';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { Typography } from "@mui/material";

const AppScreenNavigation = ({ backTarget }) => {
    const navigate = useNavigate();
    const { t } = useTranslation();

    return (
        <HBox sx={{
            width: "100%",
            justifyContent: 'space-between',
            alignItems: 'center',
        }}>
            {
                backTarget ? (
                    <Button
                        variant='text'
                        sx={{
                            gap: 1,
                            padding: '0',
                            backgroundColor: 'transparent',
                            color: 'black.light',
                            '&:hover': {
                                backgroundColor: 'transparent',
                                color: 'black.light',
                            },
                            '&:focus': {
                                backgroundColor: 'transparent',
                                color: 'black.light',
                            }
                        }}
                        onClick={() => {
                            navigate(backTarget);
                        }}
                    >
                        <ArrowBackIcon data-testid="chevron-left-icon" sx={{ fontSize: '16px' }} />
                        <Typography variant="body2" sx={{ color: 'inherit' }}>
                            {t('app.nav.backBtn')}
                        </Typography>
                    </Button>) : <div />
            }
            <IconButton
                component={Link}
                to='/'
                sx={{
                    width: 40,
                    height: 40,
                    '&:hover': {
                        backgroundColor: 'custom.lightGrey',
                    },
                }}
            >
                <HomeIcon sx={{ fontSize: 20, color: 'black' }} />
            </IconButton>
        </HBox>
    );
}

export default AppScreenNavigation;
