import React from "react";
import {Typography} from "@mui/material";
import LandingPageSectionWrapper from "../../components/LandingPageSectionWrapper";
import CollaborationBox from "./components/CollaborationBox";
import LandingPageSectionGrid from "../../components/LandingPageSectionGrid";

const LandingPageCollaboration = ({isDesktop}) => {
    return (
        <LandingPageSectionWrapper isDesktop={isDesktop}>
            <LandingPageSectionGrid title={'Let\'s collaborate'}>
                <Typography sx={styles.text}>
                    Do you know about some benefits or funding schemes that we are still missing? We would be really
                    happy to collaborate and include them in the catalogue. We are also very interested to learn
                    about user groups that could benefit from FörderFunke.
                </Typography>
                <CollaborationBox isDesktop={isDesktop}/>
            </LandingPageSectionGrid>
        </LandingPageSectionWrapper>
    );
}

const styles = {
    titleText: {
        fontWeight: 'bold',
        fontSize: '36px',
        textAlign: 'center',
    },
    text: {
        fontSize: '20px',
        textAlign: 'left',
        lineHeight: '1.75'
    }
};

export default LandingPageCollaboration;
