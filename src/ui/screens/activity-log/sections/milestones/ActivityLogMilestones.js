import React, {useContext} from "react";
import {Typography} from "@mui/material";
import LandingPageSectionWrapper from "../../../landing-page/components/LandingPageSectionWrapper";
import LandingPageSectionGrid from "../../../landing-page/components/LandingPageSectionGrid";
import VStack from "../../../../shared-components/VStack";
import MilestonesList from "./components/MilestonesList";
import useTranslation from "../../../../language/useTranslation";
import {LanguageContext} from "../../../../language/LanguageContext";
import {milestonesList} from "./content/milestonesList";


const ActivityLogMilestones = ({isDesktop}) => {
    const { t } = useTranslation();
    const { language } = useContext(LanguageContext);

    const upcoming_milestones = milestonesList[language].comingUp;
    const past_milestones = milestonesList[language].past;

    return (
        <LandingPageSectionWrapper isDesktop={isDesktop}>
            <LandingPageSectionGrid title={t('activityLog.milestones.title')}>
                <VStack>
                    <Typography sx={styles.text}>
                        {t('activityLog.milestones.description')}
                    </Typography>
                </VStack>
                <VStack gap={5} sx={{width: '100%'}}>
                    <MilestonesList title={t('activityLog.milestones.listTitleComingUp')} milestones={upcoming_milestones}/>
                    <MilestonesList title={t('activityLog.milestones.listTitlePast')} milestones={past_milestones}/>
                </VStack>
            </LandingPageSectionGrid>
        </LandingPageSectionWrapper>
    )
}

const styles = {
    text: {
        fontSize: '20px',
        textAlign: 'left',
    },
}

export default ActivityLogMilestones;
