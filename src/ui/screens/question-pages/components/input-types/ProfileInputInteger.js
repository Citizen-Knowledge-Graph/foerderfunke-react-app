import React from 'react';
import { TextField, Typography } from '@mui/material';

const ProfileInputInteger = ({ value, setValue, error }) => {
    const handleChange = (e) => {
        const parsed = parseInt(e.target.value, 10);
        setValue(Number.isNaN(parsed) ? null : parsed);
    };

    return (
        <>
            <TextField
                label="Value"
                variant="outlined"
                type="number"
                onChange={handleChange}
                value={value ?? ''}
            />
            {error && (
                <Typography variant="body1" color="error">
                    {error}
                </Typography>
            )}
        </>
    );
};

export default ProfileInputInteger;