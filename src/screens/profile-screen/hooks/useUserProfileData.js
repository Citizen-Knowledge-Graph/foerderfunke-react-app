import {useMemo} from 'react';
import {useMetadataStore} from "../../../storage/zustand";
import {UserModel} from "../../../models/UserModel";
import {convertUserValueRaw, expand} from "../../../utilities/rdfParsing";
import useTranslation from "../../../language/useTranslation";

const useUserProfileData = () => {
    const { t } = useTranslation();
    const metadata = useMetadataStore((state) => state.metadata);
    const userProfile = UserModel.retrieveUserData("ff:quick-check-user");

    return useMemo(() => {
        return Object.entries(userProfile)
            .filter(([key]) => !key.startsWith("@"))
            .map(([key, value]) => {
                const dfObj = metadata.df[expand(key)];
                const dfLabel = dfObj.label;
                const dfValue = convertUserValueRaw(value, dfObj, t);
                return {
                    label: dfLabel,
                    value: dfValue
                };
            });
    }, [userProfile, metadata.df, t]);
};

export default useUserProfileData;
