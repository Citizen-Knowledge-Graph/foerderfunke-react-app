import React, {useState, useEffect} from 'react';
import {Typography} from '@mui/material';
import Layout from '../../../shared-components/Layout';
import VStack from "../../../shared-components/VStack";
import HStack from "../../../shared-components/HStack";
import IconCard from "../../../shared-components/IconCard";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import StarBorderIcon from '@mui/icons-material/StarBorder';
import ButtonCard from "../../../shared-components/ButtonCard";
import {useStore} from "../../../shared-components/ViewportUpdater";
import AppScreenWrapper from "../../../shared-components/AppScreenWrapper";
import globalStyles from "../../../styles/styles";
import {useMetadataStore, useSelectedTopicsStore} from "../../../storage/zustand";
import useTranslation from "../../../language/useTranslation";


const OnboardingWelcomeScreen = ({children, buttonText, link, isLoading = false}) => {
    const { t } = useTranslation();

    const isDesktop = useStore((state) => state.isDesktop);
    const selectedTopics = useSelectedTopicsStore((state) => state.selectedTopics);
    const metadata = useMetadataStore((state) => state.metadata);

    const [numberOfBenefits, setNumberOfBenefits] = useState(0);

    useEffect(() => {
        if (selectedTopics.length > 0 && metadata?.rp) {
            let distinctRPs = {};
            for (let topic of selectedTopics) {
                const topicUri = "https://foerderfunke.org/default#" + topic.id.split(":")[1];
                const rps = Object.values(metadata.rp).filter(rp => rp.categories.includes(topicUri));
                for (let rp of rps) {
                    distinctRPs[rp.uri] = true;
                }
            }
            setNumberOfBenefits(Object.keys(distinctRPs).length);
        }
    }, [selectedTopics, metadata]);

    return (
        <Layout isApp={true} logo={false}>
            <AppScreenWrapper isDesktop={isDesktop} back={true}>
                <VStack gap={5}>
                    <VStack gap={2}>
                        <Typography sx={styles.titleText}>
                            {t('app.topicSelection.header')}
                        </Typography>
                        <HStack>
                            <IconCard icon={AccessTimeIcon} iconColor={globalStyles.secondaryColor} text="5 Min."/>
                            {metadata && numberOfBenefits > 0 && <IconCard icon={StarBorderIcon} iconColor={globalStyles.primaryColor}
                                      text={`Based on ${numberOfBenefits} benefits`}/>}
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
