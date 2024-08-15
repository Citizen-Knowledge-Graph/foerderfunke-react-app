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


const OnboardingWelcomeScreen = ({children, buttonText, link}) => {
    const isDesktop = useStore((state) => state.isDesktop);

    return (
        <Layout isApp={true} logo={false}>
            <AppScreenWrapper isDesktop={isDesktop} back={true}>
                <VStack gap={2}>
                    <Typography gutterBottom sx={styles.titleText}>
                        Quick eligibility check
                    </Typography>
                    <HStack>
                        <IconCard icon={AccessTimeIcon} iconColor={globalStyles.secondaryColor} text="5 Min."/>
                        <IconCard icon={StarBorderIcon} iconColor={globalStyles.primaryColor}
                                  text="Based on 15 Benefits"/>
                    </HStack>
                        {children}
                    <ButtonCard link={link} text={buttonText}
                                backgroundColor={globalStyles.secondaryColor}/>
                </VStack>
            </AppScreenWrapper>
        </Layout>
    );
};

const styles = {
    container: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-start',
        textAlign: 'left',
    },
    titleText: {
        fontWeight: 'bold',
        fontSize: '28px',
    },
    subTitleText: {
        fontSize: '16px',
        fontWeight: '400'
    },
    listHeader: {
        fontSize: '16px',
        fontWeight: 'bold',
    },
    buttonCardContainer: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        width: '100%',
    }
};

export default OnboardingWelcomeScreen;
