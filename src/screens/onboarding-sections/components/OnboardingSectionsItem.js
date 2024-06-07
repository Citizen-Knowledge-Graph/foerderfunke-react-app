import React from "react";
import { CardContent, Typography, Card, ButtonBase } from "@mui/material";
import ArrowForwardIosOutlinedIcon from '@mui/icons-material/ArrowForwardIosOutlined';
import SentimentSatisfiedOutlinedIcon from '@mui/icons-material/SentimentSatisfiedOutlined';
import { yellow, green } from '@mui/material/colors';
import { Link } from "react-router-dom";
import VStack from "../../../components/VStack";
import HStack from "../../../components/HStack";

const OnboardingSectionsItem = ({section, entityData, active, completed}) => {
    const backgroundColor = active ? yellow[600] : (completed ? green[500] : 'rgba(0, 0, 0, 0.1)')

    return (
        <VStack>
            <HStack justifyContent={'space-between'} alignItems={'center'}>
                <HStack justifyContent={'flex-start'} alignItems={'center'}>
                    <Card sx={{...styles.iconCard, backgroundColor}}>
                        <CardContent sx={styles.iconCardContent} data-testid="card-content">
                            <SentimentSatisfiedOutlinedIcon sx={styles.icon}/>
                        </CardContent>
                    </Card>
                    <Typography sx={styles.sectionTitle}>{section.title}</Typography>
                </HStack>
                {
                    active || completed ? (
                        <ButtonBase
                            component={Link}
                            to={`/profile-section/${section.id}`}
                            state={{ entityData }}
                        >
                            <HStack alignItems={'center'} gap={1}>
                                <ArrowForwardIosOutlinedIcon/>
                            </HStack>
                        </ButtonBase>
                    ) : null
                }
            </HStack>
        </VStack>
    );
}

const styles = {
    iconCard: {
        width: '50px',
        height: '50px',
        boxShadow: 'none',
        backgroundColor: 'rgba(0, 0, 0, 0.1)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    iconCardContent: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '0px',
        "&:last-child": {
            paddingBottom: '0px',
        }
    },
    icon: {
        width: '30px',
        height: '30px',
    },
    sectionTitle: {
        fontSize: '20px',
        fontWeight: '500',
    }
}

export default OnboardingSectionsItem;
