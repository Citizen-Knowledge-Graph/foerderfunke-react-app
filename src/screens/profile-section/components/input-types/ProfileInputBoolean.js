import React from 'react';
import { FormControlLabel, Switch, Typography } from '@mui/material';

const ProfileInputBoolean = ({ value, setValue, error }) => {
    const handleToggle = (event) => {
        setValue(event.target.checked);
    };

    return (
        <>
            <FormControlLabel
                control={
                    <Switch
                        checked={value ? value : false}
                        onChange={handleToggle}
                        color="primary"
                    />
                }
                label="Yes"
            />
            {error ? (
                <Typography variant="body1" color="error">
                    {error}
                </Typography>
            ) : null}
        </>
    );
};

export default ProfileInputBoolean;
