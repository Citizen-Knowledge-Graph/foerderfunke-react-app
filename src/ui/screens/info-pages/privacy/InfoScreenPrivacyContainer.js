import React from "react";
import { useStore } from '@/ui/shared-components/ViewportUpdater';
import useTranslation from '@/ui/language/useTranslation';
import InfoScreenPrivacy from "./InfoScreenPrivacy";
import { useProfileSectionStore } from "@/ui/storage/useProfileSectionStore";
import userManager from "@/core/managers/userManager";
import { useUserStore } from "@/ui/storage/zustand";

const InfoScreenPrivacyContainer = () => {
    const isDesktop = useStore((state) => state.isDesktop);
    const { t } = useTranslation();
    const initializeSectionStore = useProfileSectionStore((state) => state.initializeSectionStore);
    const updateUserId = useUserStore((state) => state.updateUserId);
    const privacyBox = `${process.env.PUBLIC_URL}/assets/images/application/privacy_box.svg`;

    const initialiseNewUser = () => {
        userManager.initialiseNewUser();
        initializeSectionStore();
        updateUserId("ff:quick-check-user");
    }

    return (
        <InfoScreenPrivacy 
            t={t} 
            isDesktop={isDesktop} 
            privacyBox={privacyBox} 
            initialiseNewUser={initialiseNewUser}
        />
    );
}

export default InfoScreenPrivacyContainer;
