import React from 'react';
import { TextField, FormControl } from '@mui/material';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';

const ProfileSectionDate = ({ value, setValue, label }) => {

    const handleChange = (newValue) => {
        setValue(newValue);
    };

    return (
        <FormControl fullWidth>
            <DatePicker
                label={label}
                value={value}
                onChange={handleChange}
                renderInput={(params) => <TextField {...params} />}
            />
        </FormControl>
    );
};

export default ProfileSectionDate;
