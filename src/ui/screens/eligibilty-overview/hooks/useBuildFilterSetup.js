import { useCallback, useMemo, useEffect } from 'react';

export const useInitialiseFilters = (filterOptions, searchParams, selectedFilters = {}, setSearchParams) => {
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
    }, [filterOptions, searchParams, selectedFilters]);

    useEffect(() => {
        if (!urlHadParams && selectedFilters && Object.keys(selectedFilters).length > 0) {
            const next = new URLSearchParams();
            for (const [key, vals] of Object.entries(selectedFilters)) {
                (vals || []).forEach(v => next.append(key, v));
            }
            setSearchParams(next, { replace: true });
        }
    }, [urlHadParams, selectedFilters, setSearchParams]);

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