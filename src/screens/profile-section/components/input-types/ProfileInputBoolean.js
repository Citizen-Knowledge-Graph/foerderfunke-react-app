import React from 'react';
import { FormControlLabel, Typography, Radio, RadioGroup, FormControl } from '@mui/material';

const ProfileInputBoolean = ({ value, setValue, error }) => {
    const handleChange = (event) => {
        setValue(event.target.value === 'true');
    };

    return (
        <FormControl component="fieldset" fullWidth>
            <RadioGroup
                value={value}
                onChange={handleChange}
            >
                {
                    [[false, 'No'], [true, 'Yes']].map((choice, i) => (
                        <FormControlLabel
                            key={i}
                            value={choice[0]}
                            control={<Radio />}
                            label={choice[1]}
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

export default ProfileInputBoolean;
