import React from 'react';
import {Card, CardContent, Typography} from '@mui/material';
import HStack from './HStack';
import {Link} from "react-router-dom";

const ClickIconCard = ({link, text, icon: Icon, iconColor}) => {
    return (
        <Card sx={{...styles.infoCard, borderColor: iconColor}}>
            <Link to={link} style={{textDecoration: 'none', color: "black", width: '100%'}}>
                <CardContent sx={styles.infoCardContent}>
                    <HStack gap={1} alignItems={'center'}>
                        {Icon ? (
                            <Icon sx={{...styles.icon, color: iconColor}}/>
                        ): null}
                        <Typography sx={styles.infoCardText}>
                            {text}
                        </Typography>
                    </HStack>
                </CardContent>
            </Link>
        </Card>
    );
};
export default ClickIconCard;

const styles = {
    infoCard: {
        borderRadius: '15px',
        borderStyle: 'solid',
        borderWidth: '1px',
        boxShadow: 'none',
    },
    icon: {
        height: '20px'
    },
    infoCardContent: {
        padding: "3px 6px 4px 8px",
        "&:last-child": {
            paddingBottom: '3px',
        },
    },
    infoCardText: {
        color: "black",
        fontSize: '12px',
        fontWeight: '400',
    }
};
