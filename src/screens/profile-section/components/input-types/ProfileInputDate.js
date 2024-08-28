import React from 'react';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { FormControl, Typography } from '@mui/material';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import dayjs from 'dayjs';

const ProfileInputDate = ({ value, setValue, error }) => {

    return (
        <>
            <LocalizationProvider dateAdapter={AdapterDayjs}>
                <FormControl fullWidth>
                    <DatePicker
                        label="Pick your birthdate"
                        value={value ? dayjs(value) : null}
                        onChange={(newValue) => setValue(newValue)}
                    />
                </FormControl>
            </LocalizationProvider>
            {error && (
                <Typography variant="body1" color="error">
                    {error}
                </Typography>
            )}
        </>
    );
};

export default ProfileInputDate;
