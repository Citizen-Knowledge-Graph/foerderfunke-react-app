import React from 'react';
import { Autocomplete, TextField, Chip } from '@mui/material';

const ProfileInputMultiSelection = ({ value, setValue, currentField }) => {

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <Autocomplete
            multiple
            id="multi-select-autocomplete"
            options={currentField.choices.map((choice) => choice.value)}
            value={value ? value : []}
            onChange={handleChange}
            renderTags={(value, getTagProps) =>
                value.map((option, index) => (
                    <Chip variant="outlined" label={option} {...getTagProps({ index })} key={index} />
                ))
            }
            renderInput={(params) => (
                <TextField
                    {...params}
                    variant="outlined"
                    label={currentField.label || "Select multiple values"}
                    placeholder="Choose options"
                />
            )}
        />
    );
};

export default ProfileInputMultiSelection;
