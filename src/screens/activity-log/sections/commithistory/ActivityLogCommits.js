import React from "react";
import {Typography} from "@mui/material";
import LandingPageSectionWrapper from "../../../landing-page/components/LandingPageSectionWrapper";
import LandingPageSectionGrid from "../../../landing-page/components/LandingPageSectionGrid";
import VStack from "../../../../components/VStack";
import useFetchLatestCommitsHandler from "./hooks/useFetchLatestCommitsHandler";
import GithubCommitsList from "./components/GithubCommitsList";

const ActivityLogCommits = ({isDesktop}) => {
    const { commits, error } = useFetchLatestCommitsHandler()

    return (
        <LandingPageSectionWrapper isDesktop={isDesktop}>
            <LandingPageSectionGrid title={'Github commits'}>
                <VStack>
                    <Typography sx={styles.text}>
                        All of our programming work is open source and tracked in Github. You will be able to see our 5 last
                        commits here. If you want to learn more you can check out our Github organisation page.
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
