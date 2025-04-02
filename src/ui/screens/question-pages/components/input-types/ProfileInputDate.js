import React from 'react';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { FormControl, Typography } from '@mui/material';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import dayjs from 'dayjs';

const ProfileInputDate = ({ t, value, setValue, error }) => {

    return (
        <>
            <LocalizationProvider dateAdapter={AdapterDayjs}>
                <FormControl>
                    <DatePicker
                        label={t('app.datafields.pickBday')}
                        value={value ? dayjs(value) : null}
                        onChange={(newValue) => setValue(newValue)}
                        sx={{
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
