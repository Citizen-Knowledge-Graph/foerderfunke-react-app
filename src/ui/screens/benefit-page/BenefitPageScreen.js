import React from 'react';
import Layout from "@/ui/shared-components/Layout";
import { VBox } from '@/ui/shared-components/LayoutBoxes';
import BenefitPageHeader from "./components/BenefitPageHeader";
import AppScreenWrapperContainer from '@/ui/shared-components/app-screen-wrapper/AppScreenWrapperContainer';
import featureFlags from "@/featureFlags";
import BenefitPageGeneral from './components/BenefitPageGeneral';
import BenefitPageApplication from './components/BenefitPageApplication';
import BenefitPageRequirements from './components/BenefitPageRequirements';
import BenefitPageLocal from './components/BenefitPageLocal';
import { pickLang } from "@/ui/language/useTranslation";
import { useLanguageStore } from "@/ui/storage/useLanguageStore";
import { useUserStore } from "@/ui/storage/zustand";
import userManager from "@/core/managers/userManager";
import BenefitPageMarkdownElement from "@/ui/screens/benefit-page/components/BenefitPageMarkDownElement";

const BenefitPageScreen = ({
    t,
    id,
    isDesktop,
    benefitPageData,
    validatedStatus,
    categoryTitles,
    matchingGraph
}) => {
    const language = useLanguageStore((state) => state.language);

    const buildContactSection = () => {
        if (!benefitPageData?.contactMD) return;
        let data = benefitPageData.contactMD;
        let blocks = [];
        if (data.general) {
            blocks.push(pickLang(data.general, language, null));
        } else {
            blocks.push("No general contact info available");
        }
        if (data.specific && Array.isArray(data.specific)) {
            const activeUserId = useUserStore.getState().activeUserId;
            // use keys in "pattern" instead of hardcoded ff:hasResidence TODO
            let actualLoc = userManager.retrieveUserField(activeUserId, "ff:hasResidence");
            if (!actualLoc) {
                blocks.push("Can't customize contact info without residence info in profile --> TODO: option to add it");
            }
            let found = false;
            for (let specificElement of data.specific) {
                let requiredLoc = specificElement.pattern["ff:hasResidence"];
                if (actualLoc && requiredLoc === actualLoc) {
                    found = true;
                    blocks.push(<BenefitPageMarkdownElement content={pickLang(specificElement, language, null)} />)
                }
            }
            if (!found) {
                blocks.push(`No specific contact info available yet for your residence ${actualLoc}`);
            }
        }
        return blocks.map((block, index) => (
            <div key={index}>
                {block}
            </div>
        ))
    }

    return (
        <Layout isApp={true} logo={false} back="Back">
            <AppScreenWrapperContainer backTarget={'/eligibility-overview'}>
                <VBox sx={{ gap: { xs: 4, md: 8 } }}>
                    <BenefitPageHeader id={id} benefit={benefitPageData} validatedStatus={validatedStatus} categoryTitles={categoryTitles} />
                    <VBox sx={{ gap: { xs: 4, md: 8 } }}>
                        <BenefitPageGeneral t={t} isDesktop={isDesktop} benefitPageData={benefitPageData} />
                        <BenefitPageApplication t={t} isDesktop={isDesktop} benefitPageData={benefitPageData} />
                        {
                            benefitPageData?.localHelpAvailable && (
                                <BenefitPageLocal t={t} isDesktop={isDesktop} benefitPageData={benefitPageData} />
                            )
                        }
                        {
                            buildContactSection()
                        }
                        {featureFlags.showMermaidRuleGraph &&
                            <BenefitPageRequirements t={t} isDesktop={isDesktop} evalGraph={matchingGraph} benefitPageData={benefitPageData} />
                        }
                    </VBox>
                </VBox>
            </AppScreenWrapperContainer>
        </Layout>
    );
};

export default BenefitPageScreen;
