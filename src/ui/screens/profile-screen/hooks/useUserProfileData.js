import {useMemo} from 'react';
import {useMetadataStore} from "@/ui/storage/zustand";
import userManager from "@/core/managers/userManager";
import {convertUserValueRaw, expand} from "@/core/utilities/rdfParsing";
import useTranslation from "@/ui/language/useTranslation";
import { formatEuro } from '@/ui/utils/currencyUtils';
import { useUserStore } from '@/ui/storage/zustand';

const useUserProfileData = () => {
    const { t } = useTranslation();
    const metadata = useMetadataStore((state) => state.metadata);
    const userId = useUserStore((state) => state.activeUserId);
    const userProfile = userManager.retrieveUserData(userId);

    return useMemo(() => {
        return Object.entries(userProfile)
            .filter(([key]) => !key.startsWith("@"))
            .map(([key, value]) => {
                const dfObj = metadata.df[expand(key)];
                const dfLabel = dfObj.label;
                let dfValue = convertUserValueRaw(value, dfObj, t);
                dfValue = dfObj.datafield === "ff:vermoegen" ? formatEuro(dfValue) : dfValue;
                return {
                    label: dfLabel,
                    value: dfValue
                };
            });
    }, [userProfile, metadata.df, t]);
};

export default useUserProfileData;
