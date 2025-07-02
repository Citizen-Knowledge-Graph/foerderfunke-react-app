import React from 'react';
import {
    Typography,
    FormControl,
    InputLabel,
    Select,
    MenuItem,
    Checkbox,
    ListItemText,
} from '@mui/material'
import { VBox, HBox } from '@/ui/shared-components/LayoutBoxes';
import EligibilityOverviewTag from './EligibilityOverviewTag';
import theme from '@/theme';

const FILTER_KEYS = [
    { key: 'benefitCategories', label: 'Benefit Category' },
    { key: 'administrativeLevels', label: 'Administrative Level' },
    { key: 'providingAgencies', label: 'Providing Agency' },
    { key: 'associatedLaws', label: 'Associated Law' },
]

const EligibilityOverviewFilter = ({ filterOptions, filters, onChangeFilters }) => {
    const handleChange = (key) => (event) => {
        onChangeFilters(prev => ({
            ...prev,
            [key]: event.target.value,
        }))
    }

    const groupedSelected = Object.entries(filters).reduce((acc, [key, selectedIds]) => {
        const labels = (filterOptions[key] || [])
            .filter(opt => selectedIds.includes(opt.id))
            .map(opt => opt.label);
        if (labels.length) {
            acc[key] = labels;
        }
        return acc;
    }, {});

    return (
        <VBox
            sx={{
                gap: 4,
                backgroundColor: 'white.main',
                padding: '32px',
                borderRadius: theme.shape.borderRadius,
            }}
        >
            <VBox sx={{ gap: 2 }}>
                <Typography variant="h4" sx={{ color: 'blue.main', fontWeight: '400' }}>
                    Filter
                </Typography>
                <HBox sx={{ flex: 1, justifyContent: 'space-between', gap: 4, flexWrap: 'wrap' }}>
                    {FILTER_KEYS.map(({ key, label }) => (
                        <FormControl key={key} size="small" sx={{ minWidth: 200 }}>
                            <InputLabel id={`${key}-label`}>{label}</InputLabel>
                            <Select
                                labelId={`${key}-label`}
                                multiple
                                value={filters[key]}
                                onChange={handleChange(key)}
                                label={label}
                                renderValue={() => label}
                            >
                                {filterOptions[key].map(item => (
                                    <MenuItem key={item.id} value={item.id}>
                                        <Checkbox checked={filters[key].includes(item.id)} />
                                        <ListItemText primary={item.label} />
                                    </MenuItem>
                                ))}
                            </Select>
                        </FormControl>
                    ))}
                </HBox>
            </VBox>

            {
                Object.entries(groupedSelected).length > 0 && (
                    <HBox> {
                        Object.entries(groupedSelected).map(([category, labels]) => (
                            labels.map((label, index) => (
                                <EligibilityOverviewTag
                                    key={`${category}-${index}`}
                                    tag={label}
                                    tagType={category}
                                />
                            ))
                        ))}
                    </HBox>
                )
            }
        </VBox>
    );
};

export default EligibilityOverviewFilter;