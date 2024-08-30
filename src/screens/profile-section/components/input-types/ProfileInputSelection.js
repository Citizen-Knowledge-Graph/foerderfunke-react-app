import React from 'react';
import { FormControl, FormControlLabel, FormLabel, RadioGroup, Radio, Typography } from "@mui/material";

const ProfileInputSelection = ({ value, setValue, currentField, error }) => {

    const handleChange = (event) => {
        setValue(event.target.value);
    };

    return (
        <FormControl component="fieldset" fullWidth>
            <RadioGroup
                value={value}
                onChange={handleChange}
            >
                {
                    currentField.choices.map((choice, i) => (
                        <FormControlLabel
                            key={i}
                            value={choice.value}
                            control={<Radio />}
                            label={choice.label}
                        />
                    ))
                }
            </RadioGroup>
            {error && (
                <Typography variant="body1" color="error">
                    {error}
                </Typography>
            )}
        </FormControl>
    );
};

export default ProfileInputSelection;
