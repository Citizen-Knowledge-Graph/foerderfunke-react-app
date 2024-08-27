import React, { useMemo } from 'react';
import { Autocomplete, TextField, Chip } from '@mui/material';

const ProfileInputMultiSelection = ({ value, setValue, currentField }) => {

    const choices = useMemo(() => {
        const map = {};
        currentField.choices.forEach((choice) => {
            map[choice.value] = choice.label;
        });
        return map;
    }, [currentField.choices]);

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
            getOptionLabel={(option) => choices[option]}
            renderTags={(value, getTagProps) =>
                value.map((option, index) => (
                    <Chip variant="outlined" label={choices[option]} {...getTagProps({ index })} key={option} />
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
