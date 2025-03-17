import React, {useMemo} from 'react';
import {Checkbox, FormControlLabel, FormGroup, FormLabel, Typography} from '@mui/material';
import useTranslation from "../../../../language/useTranslation";

const ProfileInputMultiSelection = ({ value, setValue, currentField, error }) => {
    const { t } = useTranslation();

    const choices = useMemo(() => {
        const map = {};
        currentField.choices.forEach((choice) => {
            map[choice.value] = choice.label;
        });
        return map;
    }, [currentField.choices]);

    const handleChange = (event) => {
        const selectedValue = event.target.name;
        const isChecked = event.target.checked;

        if (isChecked) {
            setValue((prevValue) => {
                return prevValue ? [...prevValue, selectedValue] : [selectedValue];
            });
        } else {
            setValue(value.filter((item) => item !== selectedValue));
        }
    };

    return (
        <>
            <FormGroup>
                <FormLabel component="legend">{t('app.questions.multipleAnswers')}</FormLabel>
                {Object.entries(choices).map(([key, label]) => (
                    <FormControlLabel
                        key={key}
                        sx={{ mb: 2 }} // Increased spacing between entries
                        control={
                            <Checkbox
                                checked={value? value.includes(key) : false}
                                onChange={handleChange}
                                name={key}
                            />
                        }
                        label={label}
                    />
                ))}
            </FormGroup>
            {error && (
                <Typography variant="body1" color="error">
                    {error}
                </Typography>
            )}
        </>
    );
};

export default ProfileInputMultiSelection;
