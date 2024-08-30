import React from 'react';
import {Typography} from '@mui/material';
import Layout from '../../../components/Layout';
import VStack from "../../../components/VStack";
import HStack from "../../../components/HStack";
import IconCard from "../../../components/IconCard";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import StarBorderIcon from '@mui/icons-material/StarBorder';
import ButtonCard from "../../../components/ButtonCard";
import {useStore} from "../../../components/ViewportUpdater";
import AppScreenWrapper from "../../../components/AppScreenWrapper";
import globalStyles from "../../../styles/styles";
import {useMetadataStore, useSelectedTopicsStore} from "../../../storage/zustand";


const OnboardingWelcomeScreen = ({children, buttonText, link, isLoading = false}) => {
    const isDesktop = useStore((state) => state.isDesktop);
    const selectedTopics = useSelectedTopicsStore((state) => state.selectedTopics);
    const metadata = useMetadataStore((state) => state.metadata);

    const calculateNumberOfBenefits = () => {
        let distinctRPs = {};
        for (let topic of selectedTopics) {
            const topicUri = "https://foerderfunke.org/default#" + topic.id.split(":")[1];
            const rps = Object.values(metadata.rp).filter(rp => rp.categories.includes(topicUri));
            for (let rp of rps) {
                distinctRPs[rp.uri] = true;
            }
        }
        return Object.keys(distinctRPs).length;
    }

    return (
        <Layout isApp={true} logo={false}>
            <AppScreenWrapper isDesktop={isDesktop} back={true}>
                <VStack gap={5}>
                    <VStack gap={2}>
                        <Typography sx={styles.titleText}>
                            Quick eligibility check
                        </Typography>
                        <HStack>
                            <IconCard icon={AccessTimeIcon} iconColor={globalStyles.secondaryColor} text="5 Min."/>
                            <IconCard icon={StarBorderIcon} iconColor={globalStyles.primaryColor}
                                      text={`Based on ${calculateNumberOfBenefits()} Benefits`}/>
                        </HStack>
                    </VStack>
                    {children}
                    <ButtonCard link={link} text={buttonText}
                                backgroundColor={globalStyles.secondaryColor} isLoading={isLoading}/>
                </VStack>
            </AppScreenWrapper>
        </Layout>
    )
        ;
};

const styles = {
    titleText: {
        fontWeight: 'bold',
        fontSize: '36px',
    }
};

export default OnboardingWelcomeScreen;
