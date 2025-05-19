import React from "react";
import { useStore } from '@/ui/shared-components/ViewportUpdater';
import useTranslation from '@/ui/language/useTranslation';
import InfoScreenPrivacy from "./InfoScreenPrivacy";

const InfoScreenPrivacyContainer = () => {
    const isDesktop = useStore((state) => state.isDesktop);
    const { t } = useTranslation();
    const privacyBox = `${process.env.PUBLIC_URL}/assets/images/application/privacy_box.svg`;

    return (
        <InfoScreenPrivacy 
            t={t} 
            isDesktop={isDesktop} 
            privacyBox={privacyBox} 
        />
    );
}

export default InfoScreenPrivacyContainer;
