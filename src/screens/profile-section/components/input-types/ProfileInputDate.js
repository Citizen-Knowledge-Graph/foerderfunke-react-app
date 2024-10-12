import React from 'react';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { FormControl, Typography } from '@mui/material';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import dayjs from 'dayjs';
import useTranslation from "../../../../language/useTranslation";

const ProfileInputDate = ({ value, setValue, error }) => {

    const { t } = useTranslation();

    return (
        <>
            <LocalizationProvider dateAdapter={AdapterDayjs}>
                <FormControl fullWidth>
                    <DatePicker
                        label={t('app.datafields.pickBday')}
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
