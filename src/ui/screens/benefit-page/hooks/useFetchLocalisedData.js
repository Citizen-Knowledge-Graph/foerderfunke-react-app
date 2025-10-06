import { useMemo } from "react";
import { pickLang } from "@/ui/language/useTranslation";
import { useLanguageStore } from "@/ui/storage/useLanguageStore";
import { useUserStore } from "@/ui/storage/zustand";
import userManager from "@/core/managers/userManager";

export const useFetchLocaliseData = (benefitPageData) => {
    const language = useLanguageStore(s => s.language);
    const activeUserId = useUserStore(s => s.activeUserId);

    return useMemo(() => {
        if (!activeUserId) return null;
        
        const loc = userManager.retrieveUserField(activeUserId, "ff:hasResidence");
        if (!loc) return null ;

        const list = benefitPageData?.localisedData ?? [];
        if (!list.length) return null;

        const byLoc = Object.fromEntries(
            list.map(item => [item?.pattern?.["ff:hasResidence"], item])
        );

        const match =
            byLoc[loc] ??
            byLoc["ff:hasResidence-other"] ??
            list[0];

        return match ? pickLang(match, language, null) : null;
    }, [activeUserId, benefitPageData, language]);
};
