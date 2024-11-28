import React from "react";
import {Button, Typography} from "@mui/material";
import globalStyles from "../../../../../styles/styles";
import HStack from "../../../../../shared-components/HStack";

const FeedbackButtonMobile = ({Icon, selected, handleButtonClick, color, label}) => {

    return (
        <HStack gap={3} alignItems={'center'} sx={{width: '100%'}}>
            <Button
                onClick={handleButtonClick}
                sx={{
                    width: '100%',
                    borderRadius: '12px',
                    padding: '8px',
                    backgroundColor: selected ? color : globalStyles.primaryColorTransparent,
                    border: selected ? `2px solid ${color}` : '2px solid transparent',
                    color: selected ? 'white' : 'black',
                    transition: 'background-color 0.3s, border 0.3s, color 0.3s',
                    '&:hover': {
                        backgroundColor: selected ? color : globalStyles.primaryColorTransparent,
                    },
                    '&:focusVisible': {
                        backgroundColor: selected ? color : globalStyles.primaryColorTransparent,
                        outline: 'none',
                        border: selected ? `2px solid ${color}` : '2px solid transparent',
                    },
                }}
            >
                <HStack justifyContent={'space-between'} alignItems={'center'} sx={{
                    width: '100%',
                    paddingLeft: '32px',
                    paddingRight: '32px',
                }}>
                    <Icon style={{
                        fontSize: '45px',
                        color: selected ? 'white' : color,
                        transition: 'background-color 0.3s, border 0.3s, color 0.3s',
                    }}/>
                    <Typography sx={{color: selected ? 'white' : color, fontWeight: 'bold'}}>
                        {label}
                    </Typography>
                </HStack>
            </Button>
        </HStack>
    );
};

export default FeedbackButtonMobile;
