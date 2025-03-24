import React from 'react';
import { TextField, Typography } from '@mui/material';

const ProfileInputInteger = ({ value, setValue, error }) => {
    if (typeof value !== 'number') {
        setValue(null);
    }

    return (
        <>
            <TextField
                label="Value"
                variant="outlined"
                onChange={(e) => setValue(parseInt(e.target.value, 10))}
                value={value || ''}
            />
            {error ? (
                <Typography variant="body1" color="error">
                    {error}
                </Typography>
            ) : null}
        </>
    );
};

export default ProfileInputInteger;
