import React from "react";
import VStack from "../../../components/VStack";
import HStack from "../../../components/HStack";
import {CardContent, Typography, Card} from "@mui/material";
import ArrowForwardIosOutlinedIcon from '@mui/icons-material/ArrowForwardIosOutlined';
import SentimentSatisfiedOutlinedIcon from '@mui/icons-material/SentimentSatisfiedOutlined';
import {Link} from "react-router-dom";
import ButtonBase from "@mui/material/ButtonBase";

const styles = {
    iconCard: {
        width: '40px',
        height: '40px',
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
    sectionTitle: {
        fontSize: '20px',
        fontWeight: '500',
    }
}

const onboardingSectionsItem = (props) => {
    return (
        <VStack>
            <HStack justifyContent={'space-between'} alignItems={'center'}>
                <HStack justifyContent={'flex-start'} alignItems={'center'}>
                    <Card sx={styles.iconCard}>
                        <CardContent sx={styles.iconCardContent} data-testid="card-content">
                            <SentimentSatisfiedOutlinedIcon/>
                        </CardContent>
                    </Card>
                    <Typography sx={styles.sectionTitle}>{props.section.title}</Typography>
                </HStack>
                <ButtonBase component={Link} to="/onboarding">
                    <ArrowForwardIosOutlinedIcon/>
                </ButtonBase>
            </HStack>
        </VStack>
    );
}

export default onboardingSectionsItem;
