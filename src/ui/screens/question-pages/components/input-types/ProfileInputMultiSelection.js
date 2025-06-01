import React, { useMemo } from 'react';
import { Checkbox, FormControlLabel, FormGroup, FormLabel, Typography } from '@mui/material';
import useTranslation from "@/ui/language/useTranslation";

const ProfileInputMultiSelection = ({ value, setValue, currentField, error }) => {
    const { t } = useTranslation();

    const choices = useMemo(() => {
        const map = {};
        currentField?.['ff:hasAnswerOption']?.forEach((choice) => {
            map[choice?.['@id']] = choice?.['rdfs:label']?.['@value'];
        });
        return map;
    }, [currentField]);

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

    console.log('choices: ', choices);  

    return (
        <>
            <FormGroup>
                <FormLabel component="legend">{t('app.questions.multipleAnswers')}</FormLabel>
                {Object.entries(choices).map(([key, label]) => (
                    <FormControlLabel
                        key={key}
                        sx={{ mb: 2 }}
                        control={
                            <Checkbox
                                checked={Array.isArray(value) ? value.includes(key) : false} onChange={handleChange}
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
