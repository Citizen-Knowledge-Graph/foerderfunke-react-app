import React from "react";
import {Typography} from "@mui/material";
import LandingPageSectionWrapper from "../../../landing-page/components/LandingPageSectionWrapper";
import LandingPageSectionGrid from "../../../landing-page/components/LandingPageSectionGrid";
import VStack from "../../../../components/VStack";
import MilestonesList from "./components/MilestonesList";
import useTranslation from "../../../../language/useTranslation";

const upcoming_milestones = [
    {
        title: 'XXX Collaboration',
        date: 'September 2024',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut ' +
            'labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod ' +
            'tempor incididunt ut '
    }
]

const past_milestones = [
    {
        title: 'New feedback and collaboration sections',
        date: 'September 2024',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut ' +
            'labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod ' +
            'tempor incididunt ut '
    },
    {
        title: 'Demo Day Prototype Fund',
        date: 'September 2024',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut ' +
            'labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod ' +
            'tempor incididunt ut '
    }
]

const ActivityLogMilestones = ({isDesktop}) => {
    const { t } = useTranslation();

    return (
        <LandingPageSectionWrapper isDesktop={isDesktop}>
            <LandingPageSectionGrid title={t('activityLog.milestones.title')}>
                <VStack>
                    <Typography sx={styles.text}>
                        {t('activityLog.milestones.description')}
                    </Typography>
                </VStack>
                <VStack gap={5} sx={{width: '100%'}}>
                    <MilestonesList title={'Coming up'} milestones={upcoming_milestones}/>
                    <MilestonesList title={'Past'} milestones={past_milestones}/>
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
