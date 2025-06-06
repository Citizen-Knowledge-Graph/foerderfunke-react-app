import React from 'react';
import {TextField, Typography} from '@mui/material';

const ProfileInputText = ({value, setValue, error}) => {
    return (
        <>
            <TextField
                variant="outlined"
                label="Value"
                onChange={(e) => setValue(e.target.value)}
                value={value || ''}
                fullWidth
            />
            {error ? (
                <Typography variant="body1" color="error">
                    {error}
                </Typography>
            ) : null}
        </>
    );
};

export default ProfileInputText;
