import React from 'react';
import VStack from "./VStack";
import HStack from "./HStack";
import {Link} from 'react-router-dom';
import {Typography} from '@mui/material';
import IconCard from "./IconCard";
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import globalStyles from "../styles/styles";

const ClickCard = ({
                       link,
                       time,
                       title,
                       subtitle,
                       cardHeight = '175px',
                       subtitleColor = 'white',
                       icon = AccessTimeIcon,
                       iconColor = "green"
                   }) => {
    return (
        <VStack data-testid="card-container"
                sx={{...styles.card, minHeight: cardHeight}}>
            <Link to={link} style={{textDecoration: 'none', color: "black", width: '100%'}}>
                <VStack sx={styles.cardContent} justifyContent={'space-between'}>
                    <HStack justifyContent={'flex-end'} gap={1}>
                        <IconCard icon={icon} iconColor={iconColor} text={time}/>
                    </HStack>
                    <HStack justifyContent={'flex-start'} gap={1}>
                        <VStack gap={0} justifyContent={'flex-end'}>
                            <Typography sx={{...styles.cardContentTitle}}>
                                {title}
                            </Typography>
                            <Typography sx={{...styles.cardContentSubTitle}}>
                                {subtitle}
                            </Typography>
                        </VStack>
                    </HStack>
                </VStack>
            </Link>
        </VStack>
    );
};

export default ClickCard;

const styles = {
    card: {
        width: "100%",
        borderRadius: '15px',
        backgroundColor: globalStyles.tertiaryColor,
        boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
    },
    cardContent: {
        padding: "16px",
    },
    cardContentTitle: {
        fontSize: '36px',
        fontWeight: 'bold',
        color: 'white'
    },
    cardContentSubTitle: {
        fontSize: '16px',
        fontWeight: '400',
        color: 'white'
    }
};
