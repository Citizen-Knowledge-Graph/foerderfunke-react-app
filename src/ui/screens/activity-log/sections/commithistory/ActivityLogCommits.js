import React from "react";
import {Typography} from "@mui/material";
import LandingPageSectionWrapper from "../../../landing-page/components/LandingPageSectionWrapper";
import LandingPageSectionGrid from "../../../landing-page/components/LandingPageSectionGrid";
import VStack from "../../../../shared-components/VStack";
import useFetchLatestCommitsHandler from "./hooks/useFetchLatestCommitsHandler";
import GithubCommitsList from "./components/GithubCommitsList";
import useTranslation from "../../../../language/useTranslation";

const ActivityLogCommits = ({isDesktop}) => {
    const { t } = useTranslation();
    const { commits, error } = useFetchLatestCommitsHandler()

    return (
        <LandingPageSectionWrapper isDesktop={isDesktop}>
            <LandingPageSectionGrid title={t('activityLog.gitCommits.title')}>
                <VStack>
                    <Typography sx={styles.text}>
                        {t('activityLog.gitCommits.description')}
                    </Typography>
                </VStack>
                <VStack gap={5} sx={{width: '100%'}}>
                    <GithubCommitsList commits={commits}/>
                </VStack>
                {error && (
                    <Typography color="error">
                        Commits cannot be loaded.
                    </Typography>
                )}
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

export default ActivityLogCommits;
