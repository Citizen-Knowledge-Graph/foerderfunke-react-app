import React, {useEffect} from 'react';
import { FormControlLabel, Switch, Typography } from '@mui/material';

const ProfileInputBoolean = ({ value, setValue, error }) => {
    useEffect(() => {
        if (value === undefined || value === null || value === '') {
            setValue(false);
        }
    }, [value, setValue]);

    const handleToggle = (event) => {
        setValue(event.target.checked);
    };

    return (
        <>
            <FormControlLabel
                control={
                    <Switch
                        checked={!!value}
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
