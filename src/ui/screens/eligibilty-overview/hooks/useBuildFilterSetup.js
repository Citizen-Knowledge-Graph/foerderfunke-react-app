import { useCallback, useMemo } from 'react';

export const useInitialiseFilters = (filterOptions, searchParams) => {
    return useMemo(() => {
        const f = {};
        for (let key of Object.keys(filterOptions)) {
            const allForKey = searchParams.getAll(key);
            if (allForKey.length) {
                f[key] = allForKey;
            }
        }
        return f;
    }, [searchParams, filterOptions]);
}

export const useFilterChangeHandler = ({ filters, setSearchParams }) => {
    const handleChangeFilters = useCallback((updater) => {
        const newFilters = updater(filters);
        const next = new URLSearchParams();
        for (let [key, vals] of Object.entries(newFilters)) {
            ; (vals || []).forEach((v) => next.append(key, v));
        }

        setSearchParams(next, { replace: true });
    }, [filters, setSearchParams]);
    return handleChangeFilters;
};