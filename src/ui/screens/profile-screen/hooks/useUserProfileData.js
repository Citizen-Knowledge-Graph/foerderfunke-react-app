import { useMemo } from 'react';
import userManager from "@/core/managers/userManager";
import { convertUserValueRaw } from "@/core/utils/rdfParsing";
import useTranslation from "@/ui/language/useTranslation";
import { formatEuro } from '@/ui/utils/currencyUtils';
import { useMetadataStore } from '@/ui/storage/zustand';

const useUserProfileData = () => {
    const { t } = useTranslation();
    const metadata = useMetadataStore((state) => state.metadata);
    const userProfile = userManager.retrieveUserData("ff:quick-check-user");

    return useMemo(() => {
        return Object.entries(userProfile)
            .filter(([key]) => !key.startsWith("@"))
            .map(([key, value]) => {
                const dfObj = metadata["ff:hasDF"]?.find(df => df["@id"] === key);
                const dfLabel = dfObj?.["rdfs:label"]?.["@value"];
                let dfValue = convertUserValueRaw(value, dfObj, t);
                dfValue = dfObj?.['@id'] === "ff:vermoegen" ? formatEuro(dfValue) : dfValue;
                return {
                    label: dfLabel,
                    value: dfValue
                };
            });
    }, [userProfile, metadata, t]);
};

export default useUserProfileData;
