import { useMemo } from "react";
import { pickLang } from "@/ui/language/useTranslation";
import { useLanguageStore } from "@/ui/storage/useLanguageStore";
import { useUserStore } from "@/ui/storage/zustand";
import userManager from "@/core/managers/userManager";

export const useFetchCustomBenefitPageHints = (benefitPageData) => {
    const language = useLanguageStore(s => s.language);
    const activeUserId = useUserStore(s => s.activeUserId);

    return useMemo(() => {
        if (!activeUserId) return null;
        const hints = benefitPageData?.customHints ?? [];
        if (!hints.length) return null;

        let triggeredHints = [];
        for (let hint of hints) {
            let isTriggered = true;
            for (const [datafield, triggerValue] of Object.entries(hint.pattern)) {
                const actualValue = userManager.retrieveUserField(activeUserId, datafield);
                if (actualValue === null || actualValue !== triggerValue) isTriggered = false;
            }
            if (isTriggered) triggeredHints.push(pickLang(hint, language, null));
        }

        return triggeredHints;
    }, [activeUserId, benefitPageData, language]);
};
