import React, {useEffect} from 'react';
import {FormControlLabel, Typography, Radio, RadioGroup} from '@mui/material';

const ProfileInputBoolean = ({ value, setValue, error }) => {
    useEffect(() => {
        if (value === null) {
            setValue(false)
        }
    }, [value, setValue]);

    const handleChange = (event) => {
        setValue(event.target.value === 'true');
    };

    return (
        <>
            <RadioGroup row value={String(!!value)} onChange={handleChange}>
                <FormControlLabel
                    value="false"
                    control={<Radio color="primary" />}
                    label="No"
                />
                <FormControlLabel
                    value="true"
                    control={<Radio color="primary" />}
                    label="Yes"
                />
            </RadioGroup>
            {error && (
                <Typography variant="body1" color="error">
                    {error}
                </Typography>
            )}
        </>
    );
};

export default ProfileInputBoolean;
