import { useCallback, useMemo, useEffect } from 'react';

export const useInitialiseFilters = (filterOptions, searchParams, selectedFilters = {}, setSearchParams, setSelectedFilters) => {
    const { filters, urlHadParams } = useMemo(() => {
        const f = {};
        let any = false;
        for (let key of Object.keys(filterOptions)) {
            const allForKey = searchParams.getAll(key);
            if (allForKey.length) {
                f[key] = allForKey;
                any = true;
            }
        }
        return { filters: any ? f : selectedFilters, urlHadParams: any };
    }, [filterOptions, searchParams]);

    useEffect(() => {
        if (!urlHadParams && selectedFilters && Object.keys(selectedFilters).length > 0) {
            const next = new URLSearchParams();
            for (const [key, vals] of Object.entries(selectedFilters)) {
                (vals || []).forEach(v => next.append(key, v));
            }
            setSearchParams(next, { replace: true });
        }
    }, [urlHadParams, selectedFilters, setSearchParams]);

    const areFiltersEqual = (a = {}, b = {}) => {
        const aKeys = Object.keys(a);
        const bKeys = Object.keys(b);
        if (aKeys.length !== bKeys.length) return false;
        for (const k of aKeys) {
            const aVals = a[k] || [];
            const bVals = b[k] || [];
            if (aVals.length !== bVals.length) return false;
            for (let i = 0; i < aVals.length; i++) {
                if (aVals[i] !== bVals[i]) return false;
            }
        }
        return true;
    };

    // if the URL contained filter params on first load, push them into selected state
    useEffect(() => {
        if (urlHadParams) {
            // only set if different to avoid update loops
            if (!areFiltersEqual(selectedFilters, filters)) {
                setSelectedFilters(filters);
            }
        }
    }, [urlHadParams, filters, selectedFilters, setSelectedFilters]);

    return filters;
};

export const useFilterChangeHandler = ({ filters, setSearchParams, setSelectedFilters }) => {
    return useCallback((updater) => {
        const newFilters = updater(filters);

        setSelectedFilters(newFilters);

        const next = new URLSearchParams();
        for (let [key, vals] of Object.entries(newFilters)) {
            ; (vals || []).forEach((v) => next.append(key, v));
        }
        setSearchParams(next, { replace: true });
    }, [filters, setSearchParams, setSelectedFilters]);
};