import React from "react";
import VStack from "../../../components/VStack";
import HStack from "../../../components/HStack";
import {CardContent, Typography, Card} from "@mui/material";
import ArrowForwardIosOutlinedIcon from '@mui/icons-material/ArrowForwardIosOutlined';
import SentimentSatisfiedOutlinedIcon from '@mui/icons-material/SentimentSatisfiedOutlined';
import {Link} from "react-router-dom";
import ButtonBase from "@mui/material/ButtonBase";
import {yellow} from '@mui/material/colors';


const onboardingSectionsItem = ({section, active, first}) => {
    const backgroundColor = active ? yellow[600] : 'rgba(0, 0, 0, 0.1)'

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
                    active ? (
                        <ButtonBase component={Link} to={`/profile-section/${section.id}`}>
                            <HStack alignItems={'center'} gap={1}>
                                {first ? <Typography>Start</Typography> : null}
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

export default onboardingSectionsItem;
