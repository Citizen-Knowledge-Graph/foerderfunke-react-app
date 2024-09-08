import React from "react";
import {Button} from "@mui/material";

const FeedbackButton = ({Icon, selected, handleButtonClick, color}) => {
    return (
        <Button
            onClick={handleButtonClick}
            sx={{
                fontSize: '30px',
                borderRadius: '50%',
                width: '60px',
                height: '60px',
                minWidth: '60px',
                padding: 0,
                backgroundColor: selected ? color : null,
                border: selected ? `2px solid ${color}` : '2px solid transparent',
                color: selected ? 'white' : 'black',
                transition: 'background-color 0.3s, border 0.3s, color 0.3s',
            }}
        >
            <Icon style={{
                fontSize: '50px',
                color: selected ? 'white' : color,
                transition: 'background-color 0.3s, border 0.3s, color 0.3s',
            }}/>
        </Button>
    );
};

export default FeedbackButton;
