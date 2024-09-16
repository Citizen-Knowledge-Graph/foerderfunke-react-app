import React from "react";
import {Typography} from "@mui/material";
import LandingPageSectionWrapper from "../../components/LandingPageSectionWrapper";
import VStack from "../../../../components/VStack";
import CollaborationBox from "./components/CollaborationBox";
import LandingPageSectionTitle from "../../components/LandingPageSectionTitle";

const LandingPageCollaboration = ({isDesktop}) => {

    return (
        <LandingPageSectionWrapper isDesktop={isDesktop}>
            <VStack gap={5} alignItems={'center'}>
                <LandingPageSectionTitle title={'Let\'s collaborate'}/>
                <VStack gap={5} sx={{maxWidth: '780px'}}>
                    <Typography sx={styles.text}>
                        Do you know about some benefits or funding schemes that we are still missing? We would be really
                        happy to collaborate and include them in the catalogue. We are also very interested to learn
                        about user groups that could benefit from FörderFunke.
                    </Typography>
                    <CollaborationBox isDesktop={isDesktop}/>
                </VStack>
            </VStack>
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
