import React, { useState } from 'react';
import {
    Typography,
    FormControl,
    InputLabel,
    Select,
    MenuItem,
} from '@mui/material';
import { VBox, HBox } from '@/ui/shared-components/LayoutBoxes';
import theme from '@/theme';

const EligibilityOverviewFilter = ({ filterSet }) => {
    const [selected, setSelected] = useState('');

    const handleChange = (event) => {
        const val = event.target.value;
        setSelected(val);
    };
    const options = ['test1', 'test2', 'test3'];

    return (
        <VBox
            sx={{
                gap: 2,
                backgroundColor: 'white.main',
                padding: '32px',
                borderRadius: theme.shape.borderRadius,
            }}
        >
            <HBox sx={{ alignItems: 'center', gap: 2, flexWrap: 'wrap' }}>
                <Typography variant="h6" sx={{ fontWeight: 'bold' }}>
                    Filter by:
                </Typography>

                <FormControl size="small" sx={{ minWidth: 200 }}>
                    <InputLabel id="filter-select-label">Benefit Category</InputLabel>
                    <Select
                        labelId="filter-select-label"
                        value={selected}
                        onChange={handleChange}
                        label="Benefit Category"
                    >
                        <MenuItem value="">
                            <em>None</em>
                        </MenuItem>
                        {filterSet?.benefitCategories?.map((opt) => (
                            <MenuItem key={opt} value={opt}>
                                {opt}
                            </MenuItem>
                        ))}
                    </Select>
                </FormControl>
                <FormControl size="small" sx={{ minWidth: 200 }}>
                    <InputLabel id="filter-select-label">Administrative Level</InputLabel>
                    <Select
                        labelId="filter-select-label"
                        value={selected}
                        onChange={handleChange}
                        label="Administrative Level"
                    >
                        <MenuItem value="">
                            <em>None</em>
                        </MenuItem>
                        {filterSet?.administrativeLevel?.map((opt) => (
                            <MenuItem key={opt} value={opt}>
                                {opt}
                            </MenuItem>
                        ))}
                    </Select>
                </FormControl>

                <FormControl size="small" sx={{ minWidth: 200 }}>
                    <InputLabel id="filter-select-label">Providing Agency</InputLabel>
                    <Select
                        labelId="filter-select-label"
                        value={selected}
                        onChange={handleChange}
                        label="Providing Agency"
                    >
                        <MenuItem value="">
                            <em>None</em>
                        </MenuItem>
                        {filterSet?.providingAgency?.map((opt) => (
                            <MenuItem key={opt} value={opt}>
                                {opt}
                            </MenuItem>
                        ))}
                    </Select>
                </FormControl>
                <FormControl size="small" sx={{ minWidth: 200 }}>
                    <InputLabel id="filter-select-label">Associated Law</InputLabel>
                    <Select
                        labelId="filter-select-label"
                        value={selected}
                        onChange={handleChange}
                        label="Associated Law"
                    >
                        <MenuItem value="">
                            <em>None</em>
                        </MenuItem>
                        {filterSet?.associatedLaw?.map((opt) => (
                            <MenuItem key={opt} value={opt}>
                                {opt}
                            </MenuItem>
                        ))}
                    </Select>
                </FormControl>
            </HBox>
        </VBox>
    );
};

export default EligibilityOverviewFilter;