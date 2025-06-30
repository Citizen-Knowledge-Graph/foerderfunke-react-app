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
import EligibilityOverTag from './EligibilityOverviewTag';

const EligibilityOverviewFilter = ({ filterSet }) => {
    const [selected, setSelected] = useState('');

    const handleChange = (event) => {
        const val = event.target.value;
        setSelected(val);
    };

    console.log('filter set in', filterSet);

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
                        {filterSet?.benefitCategories?.map((opt, index) => (
                            <EligibilityOverTag key={index} tag={opt} tagType={'administrativeLevel'} />
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
                        {filterSet?.administrativeLevel?.map((opt, index) => (
                            <EligibilityOverTag key={index} tag={opt} tagType={'administrativeLevel'} />
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
                        {filterSet?.administrativeLevel?.map((opt, index) => (
                            <EligibilityOverTag key={index} tag={opt} tagType={'administrativeLevel'} />
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
                        {filterSet?.administrativeLevel?.map((opt, index) => (
                            <EligibilityOverTag key={index} tag={opt} tagType={'administrativeLevel'} />
                        ))}
                    </Select>
                </FormControl>
            </HBox>
        </VBox>
    );
};

export default EligibilityOverviewFilter;