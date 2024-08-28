import React from 'react';
import {FormControl, MenuItem, Select, Typography} from "@mui/material";

const ProfileInputSelection = ({value, setValue, currentField, error}) => {

    const handleChange = (event) => {
        setValue(event.target.value);
    };

    return (
        <FormControl fullWidth>
            <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={value ? value : ''}
                onChange={handleChange}
                variant="outlined"
            >
                {
                    currentField.choices.map((choice, i) => (
                        <MenuItem key={i} value={choice.value}>{choice.label}</MenuItem>
                    ))
                }
            </Select>
            {error && (
                <Typography variant="body1" color="error">
                    {error}
                </Typography>
            )}
        </FormControl>
    );
};

export default ProfileInputSelection;
