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
import RegularButton from '@/ui/shared-components/buttons/RegularButton';
import theme from '@/theme';

const EligibilityOverviewFilter = ({ t, filterOptions, filters, onChangeFilters }) => {
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
            <HBox sx={{ gap: 4, alignItems: 'center', flexWrap: 'wrap', justifyContent: 'space-between' }}>
                <Typography variant="h4" sx={{ color: 'blue.main', fontWeight: '400' }}>
                    {t('app.browseAll.filter.title')}
                </Typography>
                <HBox sx={{ gap: 4, flexWrap: 'wrap' }}>
                    {Object.keys(filterOptions).length > 0 && (
                        Object.keys(filterOptions).map((key, index) => (
                            <FormControl key={index} sx={{ minWidth: 200 }}>
                                <InputLabel id={`${key}-label`}>{t(`app.browseAll.filter.${key}`)}</InputLabel>
                                <Select
                                    labelId={`${key}-label`}
                                    multiple
                                    value={filters[key] || []}
                                    onChange={handleChange(key)}
                                    label={t(`app.browseAll.filter.${key}`)}
                                    renderValue={() => t(`app.browseAll.filter.${key}`)}
                                    sx={{ borderRadius: theme.shape.borderRadius }}
                                >
                                    {filterOptions[key].map(item => (
                                        <MenuItem key={item.id} value={item.id}>
                                            <Checkbox checked={!!filters[key]?.includes(item.id)} />                                            <ListItemText primary={item.label} />
                                        </MenuItem>
                                    ))}
                                </Select>
                            </FormControl>
                        ))
                    )}
                </HBox>
            </HBox>
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
            <HBox sx={{ justifyContent: 'flex-end' }}>
                <RegularButton
                    text={'Clear filters'}
                    variant={'greyContained'}
                    onClick={() => onChangeFilters(() => ({}))}
                    size='xsmall'
                />
            </HBox>
        </VBox>
    );
};

export default EligibilityOverviewFilter;