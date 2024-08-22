import React from 'react';
import {FormControl, MenuItem, Select} from "@mui/material";

const ProfileSectionSelection = ({value, setValue, currentField}) => {

    const handleChange = (event) => {
        setValue(event.target.value);
    };

    return (
        <FormControl fullWidth>
            <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={value}
                onChange={handleChange}
                variant="outlined"
            >
                {
                    currentField.choices.map((choice, i) => (
                        <MenuItem key={i} value={choice.value}>{choice.label}</MenuItem>
                    ))
                }
            </Select>
        </FormControl>
    );
};

export default ProfileSectionSelection;
