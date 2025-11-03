import React from 'react';
import { FormControlLabel, Typography, Radio, RadioGroup, FormControl } from '@mui/material';
import useTranslation from "@/ui/language/useTranslation";

const ProfileInputBoolean = ({ value, setValue, error }) => {
    const { t } = useTranslation();

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
                    [[false, t('app.datafields.boolNo')], [true, t('app.datafields.boolYes')]].map((choice, i) => (
                        <FormControlLabel
                            key={i}
                            sx={{ mb: 2 }}
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
