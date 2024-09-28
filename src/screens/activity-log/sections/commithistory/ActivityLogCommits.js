import React from "react";
import {Typography} from "@mui/material";
import LandingPageSectionWrapper from "../../../landing-page/components/LandingPageSectionWrapper";
import LandingPageSectionGrid from "../../../landing-page/components/LandingPageSectionGrid";
import VStack from "../../../../components/VStack";

const ActivityLogCommits = ({isDesktop}) => {

    return (
        <LandingPageSectionWrapper isDesktop={isDesktop}>
            <LandingPageSectionGrid title={'Github commits'}>
                <VStack>
                    <Typography sx={styles.text}>
                        All of our coding is open source and tracked in Github. You will be able to see our 5 last
                        commits here. If you want to learn more you can check out our Github organisation page.
                    </Typography>
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

export default ActivityLogCommits;
