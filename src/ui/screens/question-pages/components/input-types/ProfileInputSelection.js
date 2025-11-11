import React, { useMemo } from 'react';
import { FormControl, FormControlLabel, RadioGroup, Radio, Typography } from "@mui/material";

const ProfileInputSelection = ({
  value,
  setValue,
  answerOptions,
  error,
  optionsFormat = "rdf",
}) => {
  const handleChange = (event) => {
    setValue(event.target.value);
  };

  const normalizedOptions = useMemo(() => {
    if (!answerOptions) return [];
    if (optionsFormat === "rdf") {
      return answerOptions.map((choice) => ({
        value: choice?.['@id'],
        label: choice?.['rdfs:label']?.['@value'],
      })).filter(opt => opt.value && opt.label);
    }
    // flat format
    return answerOptions.map((choice) => ({
      value: choice?.option,
      label: choice?.optionLabel,
    })).filter(opt => opt.value && opt.label);
  }, [answerOptions, optionsFormat]);

  return (
    <FormControl component="fieldset" fullWidth>
      <RadioGroup
        value={value}
        onChange={handleChange}
        sx={{ gap: 2 }}
      >
        {normalizedOptions.map((opt, i) => (
          <FormControlLabel
            key={i}
            value={opt.value}
            control={
              <Radio
                sx={{
                  color: "white",
                  '&.Mui-checked': { color: "yellow.dark" }
                }}
              />
            }
            label={opt.label}
            sx={{
              alignItems: "center",
              '& .MuiFormControlLabel-label': {
                whiteSpace: "normal",
                wordBreak: "break-word",
                overflowWrap: "anywhere",
              },
            }}
          />
        ))}
      </RadioGroup>
      {error && (
        <Typography variant="body1" color="error">
          {error}
        </Typography>
      )}
    </FormControl>
  );
};

export default ProfileInputSelection;