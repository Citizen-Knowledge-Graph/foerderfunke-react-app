import React from 'react';
import {Typography} from '@mui/material';
import Layout from '../../components/Layout';
import {green, grey, indigo, yellow} from '@mui/material/colors';
import useInitializeQuickCheckUser from "./hooks/useInitializeQuickCheckUser";
import useInitializeProfileSectionStore from "./hooks/useInitializeProfileSectionStore";
import InfoCard from "../../components/InfoCard";
import VStack from "../../components/VStack";
import HStack from "../../components/HStack";
import IconCard from "../../components/IconCard";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import StarBorderIcon from '@mui/icons-material/StarBorder';
import LinearProgress from "@mui/material/LinearProgress";
import ButtonCard from "../../components/ButtonCard";
import TextList from "../../components/TextList";

const benefitsList = [
    "Healthcare Assistance",
    "Childcare Support",
    "Unemployment Benefits",
    "Education Grants",
    "Housing Assistance",
    "..."
];

const OnboardingWelcome = () => {
    const entityData = useInitializeQuickCheckUser();
    const profileSection = 'quick-check-profile';
    useInitializeProfileSectionStore(profileSection, entityData);

    return (
        <Layout logo={false} back={"Back to selection"}>
            <VStack gap={2}>
                <LinearProgress variant="determinate" value={0} sx={styles.progressBar}/>
                <Typography variant="h4" gutterBottom sx={styles.titleText}>
                    Quick eligibility check
                </Typography>
                <HStack>
                    <IconCard icon={AccessTimeIcon} iconColor={green[500]} text="5 Min."/>
                    <IconCard icon={StarBorderIcon} iconColor={yellow[500]} text="Based on 15 Benefits"/>
                </HStack>
                <Typography variant="body1" gutterBottom sx={styles.subTitleText}>
                    Answer some questions about you and find out to which benefits you might be eligible to. Our
                    benefits catalogue covers a range of topics.
                </Typography>
                <VStack gap={0} sx={styles.container}>
                    <Typography variant="body1" gutterBottom sx={styles.listHeader}>
                        The quick check will include the following:
                    </Typography>
                    <TextList items={benefitsList}/>
                </VStack>
            </VStack>
            <InfoCard text="All data will stored as part of this browser session. If you close your browser you data
                            will disappear. If you wish to come back at a later stage you can always export the current
                            state of your profile"/>
            <ButtonCard link={`/profile-section/${profileSection}`} text="Discover your benefits"
                        backgroundColor={green[500]}/>
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
    },
    buttonCard: {
        display: 'flex',
        flexDirection: 'column',
        flex: '1',
        backgroundColor: indigo[600],
        borderRadius: '15px',
        boxShadow: 'none',
    },
    buttonCardContent: {
        padding: '16px',
        "&:last-child": {
            paddingBottom: '16px',
        }
    },
    buttonCardText: {
        color: 'white',
        fontWeight: '500',
        textAlign: 'center',
        margin: '0',
    },
    progressBar: {
        width: '100%',
        height: '10px',
        backgroundColor: grey[300],
        borderRadius: '5px',
    }
};

export default OnboardingWelcome;
