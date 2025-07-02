import { useMemo } from 'react';

const useFilterEligibilityData = (eligibilityData, filters) => {
    return useMemo(() => {
            if (!eligibilityData) return null;
    
            const filterKeys = [
                'providingAgencies',
                'associatedLaws',
                'benefitCategories',
                'administrativeLevels'
            ];
    
            const passesAllFilters = item => {
                return filterKeys.every(key => {
                    const selectedValues = filters[key] || [];
                    if (selectedValues.length === 0) return true;
    
                    const itemValue = item[key].map(v => v['id'] || v).filter(Boolean);
                    if (Array.isArray(itemValue)) {
                        return itemValue.some(v => selectedValues.includes(v));
                    } else {
                        return selectedValues.includes(itemValue);
                    }
                });
            };
    
            return Object.fromEntries(
                Object.entries(eligibilityData)
                    .map(([categoryName, categoryBuckets]) => {
                        const filteredBuckets = Object.fromEntries(
                            Object.entries(categoryBuckets)
                                .map(([bucketKey, items]) => [
                                    bucketKey,
                                    items.filter(passesAllFilters)
                                ])
                                .filter(([_bucketKey, items]) => items.length > 0)
                        );
                        return [categoryName, filteredBuckets];
                    })
                    .filter(([_category, buckets]) => Object.keys(buckets).length > 0)
            );
        }, [eligibilityData, filters]);
}  

export default useFilterEligibilityData;
