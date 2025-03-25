import {useMemo} from 'react';
import {useMetadataStore} from "../../../storage/zustand";
import userManager from "../../../../core/managers/userManager";
import {convertUserValueRaw, expand} from "../../../../core/utilities/rdfParsing";
import useTranslation from "../../../language/useTranslation";
import { formatEuro } from '../../../utils/currencyUtils';

const useUserProfileData = () => {
    const { t } = useTranslation();
    const metadata = useMetadataStore((state) => state.metadata);
    const userProfile = userManager.retrieveUserData("ff:quick-check-user");

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
