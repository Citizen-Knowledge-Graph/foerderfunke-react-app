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
                       title,
                       subtitle,
                       backgroundImage,
                       backgroundColor,
                       time = null,
                       cardHeight = '175px',
                       icon = AccessTimeIcon,
                       iconColor = "green"
                   }) => {
    return (
        <VStack justifyContent={'flex-end'}
                data-testid="card-container"
                sx={{
                    ...styles.card,
                    minHeight: cardHeight,
                    backgroundColor: backgroundColor,
                    backgroundImage: `url(${backgroundImage})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    position: 'relative',
                    overflow: 'hidden',
                    '&::before': {
                        content: '""',
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        right: 0,
                        bottom: 0,
                        backgroundColor: 'rgba(0, 0, 0, 0.5)',
                        zIndex: 1,
                    },
                    '& > *': {
                        position: 'relative',
                        zIndex: 2,
                    }
                }}>
            <Link to={link} style={{textDecoration: 'none', color: "black", width: '100%'}}>
                <VStack sx={styles.cardContent} >
                    <HStack justifyContent={'flex-end'} gap={1}>
                        {
                            time &&
                            <IconCard icon={icon} iconColor={iconColor} text={time}/>
                        }
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
        backgroundColor: globalStyles.tertiaryColor
    },
    cardContent: {
        padding: "16px",
    },
    cardContentTitle: {
        fontSize: '36px',
        fontWeight: 'bold',
        color: 'white',
    },
    cardContentSubTitle: {
        fontSize: '16px',
        fontWeight: '400',
        color: 'white',
    }
};
