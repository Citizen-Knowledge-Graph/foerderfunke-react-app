import React, { useMemo } from 'react';
import { Checkbox, FormControlLabel, FormGroup, FormLabel, Typography } from '@mui/material';
import useTranslation from "@/ui/language/useTranslation";
import { expand } from "@foerderfunke/sem-ops-utils";

const ProfileInputMultiSelection = ({
    value,
    setValue,
    answerOptions,
    error,
    optionsFormat = "rdf",
}) => {
    const { t } = useTranslation();

    const choices = useMemo(() => {
        const map = {};
        if (!answerOptions) return map;

        if (optionsFormat === "rdf") {
            answerOptions.forEach((choice) => {
                const key = choice?.['@id'];
                const label = choice?.['rdfs:label']?.['@value'];
                if (key && label) map[key] = label;
            });
        } else if (optionsFormat === "flat") {
            answerOptions.forEach((choice) => {
                const key = choice?.option;
                const label = choice?.optionLabel;
                if (key && label) map[key] = label;
            });
        }

        return map;
    }, [answerOptions, optionsFormat]);

    const normalizedValue = useMemo(() => {
        if (!Array.isArray(value)) return [];
        if (optionsFormat === "flat") {
            return value.map((v) => expand(v));
        }
        return value;
    }, [value, optionsFormat]);

    const handleChange = (event) => {
        const selectedValue = event.target.name;
        const isChecked = event.target.checked;

        if (isChecked) {
            setValue((prevValue = []) => {
                const toStore = optionsFormat === "flat" ? expand(selectedValue) : selectedValue;
                if (prevValue.includes(toStore)) return prevValue;
                return [...prevValue, toStore];
            });
        } else {
            setValue((prevValue = []) => {
                const expandedToRemove = optionsFormat === "flat" ? expand(selectedValue) : selectedValue;
                // remove both the expanded and the raw form to be safe
                return prevValue.filter(
                    (item) => item !== expandedToRemove && item !== selectedValue
                );
            });
        }
    };

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
                                checked={normalizedValue.includes(key)}
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