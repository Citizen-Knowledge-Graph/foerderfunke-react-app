import React, {useEffect, useState} from 'react';
import ProfileCompletedPieChart from "./ProfileCompletedPieChart";
import {useProfileInputSectionStore} from "../../../storage/zustand";
import VStack from "../../../components/VStack";
import HStack from "../../../components/HStack";
import {Button, Card, CardContent, Typography} from "@mui/material";
import { Link } from "react-router-dom";
import {green, yellow} from "@mui/material/colors";
import SentimentSatisfiedOutlinedIcon from "@mui/icons-material/SentimentSatisfiedOutlined";
import readJson from "../../../utilities/readJson";

const ProfileSectionCompleted = ({title, id, entityData}) => {
    const [nextSectionData, setNextSectionData] = useState(null);
    const sectionStatus = useProfileInputSectionStore(
        (state) => state.sections
    );
    const completedSections = sectionStatus.reduce((acc, section) => {
        return section.completed ? acc + 1 : acc;
    }, 0);
    const nextSection = sectionStatus.find((section) => section.id === id).next;

    useEffect(() => {
        const fetchData = async () => {
            const filePath = `assets/data/profile-sections/${nextSection}.json`;
            try {
                const newNextSectionData = await readJson(filePath);
                console.log('newNextSectionData:', newNextSectionData);
                setNextSectionData(newNextSectionData);
            } catch (error) {
                console.error('Failed to fetch profile input screen data:', error);
            }
        };

        fetchData();
    }, [nextSection]);

    return (
        <VStack justifyContent={'center'}>
            <ProfileCompletedPieChart completedSections={completedSections} totalSections={sectionStatus.length}/>
            <HStack justifyContent={'center'} sx={{width: "100%"}}>
                <VStack gap={1} alignItems={'center'}>
                    <Typography variant="h4">{title}</Typography>
                    <Typography variant="h6">Profilbereich vollständig!</Typography>
                </VStack>
            </HStack>
            <VStack data-testid="button-card-container">
                <Card sx={styles.buttonCard} data-testid="button-card">
                    <CardContent sx={styles.buttonCardContent} data-testid="card-content">
                        <HStack justifyContent={'space-between'}>
                            <HStack justifyContent={'flex-start'} alignItems={'center'}>
                                <SentimentSatisfiedOutlinedIcon sx={styles.icon}/>
                                <Typography variant="h6">{nextSectionData?.title}</Typography>
                            </HStack>
                            <Button variant="body1" sx={styles.buttonNext}
                                    component={Link}
                                    to={`/profile-section/${nextSection}`}
                                    state={{ entityData }}
                            >
                                Weiter
                            </Button>
                        </HStack>
                    </CardContent>
                </Card>
            </VStack>
        </VStack>
    );
};

const styles = {
    buttonCard: {
        display: 'flex',
        flexDirection: 'column',
        backgroundColor: yellow[600],
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
    icon: {
        width: '30px',
        height: '30px',
    },
    buttonNext: {
        backgroundColor: green[500],
        fontWeight: 'bold',
        margin: '0px',
        '&:focus': {
            backgroundColor: green[500],
        },
    },
};

export default ProfileSectionCompleted;
