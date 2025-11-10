import React, { useState } from 'react';
import {
    Typography,
    FormControl,
    InputLabel,
    Select,
    MenuItem,
    Checkbox,
    ListItemText,
    IconButton
} from '@mui/material'
import { VBox, HBox } from '@/ui/shared-components/LayoutBoxes';
import EligibilityOverviewTag from './EligibilityOverviewTag';
import RegularButton from '@/ui/shared-components/buttons/RegularButton';
import CloseIcon from '@mui/icons-material/Close';
import FilterAltIcon from '@mui/icons-material/FilterAlt';
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import theme from '@/theme';

const EligibilityOverviewFilter = ({ t, filterOptions, filters, onChangeFilters, isDesktop }) => {
    const [open, setOpen] = useState(isDesktop);
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
            <HBox sx={{
                justifyContent: 'space-between',
                alignItems: 'center',
                flexWrap: 'wrap',
                gap: 2,
                borderBottom: open ? '1px solid' : 'none',
                borderColor: 'grey.300',
                paddingBottom: open ? 2 : 0,
            }}>
                <HBox sx={{ width: { xs: "100%", sm: "0%" }, alignItems: 'center', justifyContent: 'space-between' }}>
                    <HBox sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                        <FilterAltIcon sx={{ color: 'black.main', fontSize: 24 }} />
                        <Typography variant="h2" sx={{ fontWeight: 400 }}>
                            {t('app.browseAll.filter.title')}
                        </Typography>
                    </HBox>
                    {
                        !isDesktop && (
                            <IconButton
                                sx={{
                                    transition: "transform 0.3s",
                                    transform: open ? "rotate(180deg)" : "rotate(0deg)",
                                    marginLeft: "8px",
                                }}
                                onClick={() => setOpen(!open)}
                            >
                                <ExpandMoreIcon />
                            </IconButton>
                        )
                    }
                </HBox>
                {
                    open && Object.entries(groupedSelected).length > 0 && (
                        <HBox sx={{ justifyContent: 'flex-end' }}>
                            <RegularButton
                                text={t('app.browseAll.filter.btnReset')}
                                variant={'transparentPink'}
                                onClick={() => onChangeFilters(() => ({}))}
                                size='xsmall'
                                endIcon={<CloseIcon sx={{ fontSize: '16px' }} />}
                            />
                        </HBox>
                    )
                }
            </HBox>
            {
                open && (
                    <HBox sx={{
                        gap: 4,
                        alignItems: 'center',
                        flexWrap: 'wrap',
                        justifyContent: 'space-between'
                    }}>
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
                                                    <Checkbox checked={!!filters[key]?.includes(item.id)} />
                                                    <ListItemText primary={item.label} />
                                                </MenuItem>
                                            ))}
                                        </Select>
                                    </FormControl>
                                ))
                            )}
                        </HBox>
                    </HBox>
                )
            }
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