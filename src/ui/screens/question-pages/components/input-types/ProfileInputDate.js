import React from 'react';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { FormControl, Typography } from '@mui/material';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import dayjs from 'dayjs';
import 'dayjs/locale/en-gb';

const ProfileInputDate = ({ t, value, setValue, error }) => {

    const handleChange = (newValue) => {
        if (newValue && dayjs.isDayjs(newValue)) {
            setValue(newValue.format('YYYY-MM-DD'));
        } else {
            setValue(null);
        }
    };

    return (
        <>
            <LocalizationProvider dateAdapter={AdapterDayjs} adapterLocale="en-gb">
                <FormControl>
                    <DatePicker
                        label={t('app.datafields.pickBday')}
                        value={value ? dayjs(value, 'YYYY-MM-DD') : null}
                        onChange={handleChange}
                        slotProps={{
                            textField: {
                                fullWidth: true,
                                sx: (theme) => ({
                                    width: '100%',
                                    [theme.breakpoints.up('sm')]: {
                                        maxWidth: 360,
                                    },
                                }),
                            },
                        }}
                        sx={
                            {
                                '& .MuiInputLabel-root.Mui-focused': {
                                    color: 'blue.main',
                                },
                                '& .MuiOutlinedInput-root': {
                                    '&:hover fieldset': { borderColor: 'blue.main' },
                                    '&.Mui-focused fieldset': { borderColor: 'blue.main' }
                                }
                            }}
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
