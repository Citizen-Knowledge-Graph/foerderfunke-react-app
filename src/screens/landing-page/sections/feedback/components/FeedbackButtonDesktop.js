import React from "react";
import {Button, Typography} from "@mui/material";
import globalStyles from "../../../../../styles/styles";
import VStack from "../../../../../components/VStack";

const FeedbackButtonDesktop = ({Icon, selected, handleButtonClick, color, label}) => {

    return (
        <VStack alignItems={'center'} gap={1}>
            <Button
                onClick={handleButtonClick}
                sx={{
                    borderRadius: '50%',
                    width: '75px',
                    height: '75px',
                    minWidth: '75px',
                    padding: 0,
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
                <Icon style={{
                    fontSize: '60px',
                    color: selected ? 'white' : color,
                    transition: 'background-color 0.3s, border 0.3s, color 0.3s',
                }}/>
            </Button>
            <Typography sx={{color: selected ? 'white' : color, fontWeight: 'bold'}}>
                {label}
            </Typography>
        </VStack>
    );
};

export default FeedbackButtonDesktop;
