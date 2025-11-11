import React, { useMemo } from 'react';
import { Checkbox, FormControlLabel, FormGroup, FormLabel, Typography } from '@mui/material';
import useTranslation from "@/ui/language/useTranslation";

const ProfileInputMultiSelection = ({
    value,
    setValue,
    answerOptions,
    error,
    optionsFormat = "rdf",
}) => {
    const { t } = useTranslation();;

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
                        control={
                            <Checkbox
                                checked={Array.isArray(value) ? value.includes(key) : false}
                                onChange={handleChange}
                                name={key}
                            />
                        }
                        label={label}
                        sx={{
                            mb: 2,
                            alignItems: "center",
                            '& .MuiFormControlLabel-label': {
                                whiteSpace: "normal",
                                wordBreak: "break-word",
                                overflowWrap: "anywhere",
                            },
                        }}
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