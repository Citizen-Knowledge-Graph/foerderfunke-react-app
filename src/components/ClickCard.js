import React from 'react';
import VStack from "./VStack";
import HStack from "./HStack";
import {Link} from 'react-router-dom';
import {Typography} from '@mui/material';
import InfoCard from "./InfoCard";
import AccessTimeIcon from '@mui/icons-material/AccessTime';

const ClickCard = ({
                       link,
                       time,
                       title,
                       subtitle,
                       backgroundImage,
                       cardHeight = '175px',
                       titleColor = 'white',
                       subtitleColor = 'white',
                       icon = AccessTimeIcon,
                       iconColor = "green"
                   }) => {
    return (
        <VStack data-testid="card-container"
                sx={{...styles.card, height: cardHeight, backgroundImage: `url(${backgroundImage})`}}>
            <Link to={link} style={{textDecoration: 'none', color: "black", width: '100%'}}>
                <VStack justifyContent={'space-between'}>
                    <HStack justifyContent={'flex-end'} gap={1}>
                        <InfoCard icon={icon} iconColor={iconColor} text={time}/>
                    </HStack>
                    <HStack justifyContent={'flex-start'} gap={1}>
                        <VStack gap={0} justifyContent={'flex-end'}>
                            <Typography sx={{...styles.cardContentTitle, color: titleColor}}>
                                {title}
                            </Typography>
                            <Typography sx={{...styles.cardContentSubTitle, color: subtitleColor}}>
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
        height: '175px',
        padding: '16px',
        borderRadius: '15px',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
    },
    cardContentTitle: {
        fontSize: '36px',
        fontWeight: 'bold',
        color: "white"
    },
    cardContentSubTitle: {
        fontSize: '16px',
        fontWeight: '400',
        color: "white"
    }
};
