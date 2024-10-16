import React from "react";
import {Typography} from "@mui/material";
import HStack from "../../../../../components/HStack";
import VStack from "../../../../../components/VStack";
import EmailLink from "../../../../../components/EmailLink";
import LinkedInLink from "../../../../../components/LinkedInLink";

const LandingPageMemberCard = ({imageUrl, name, position, email, linkedin}) => {
    return (
        <VStack sx={{flex: 1}}>
            <HStack justifyContent={'center'}>
                <HStack justifyContent={'center'} sx={{width: '200px', height: '200px', overflow: 'hidden'}}>
                    <img src={imageUrl} alt="Landing Page"
                         style={{width: "100%", height: "auto", borderRadius: "50%"}}/>
                </HStack>
            </HStack>
            <HStack justifyContent={'center'}>
                <VStack gap={1} alignItems={'center'}>
                    <Typography sx={styles.itemTitle}>
                        {name}
                    </Typography>
                    <Typography sx={styles.itemText}>
                        {position}
                    </Typography>
                    <EmailLink email={email}/>
                    <LinkedInLink linkedin={linkedin}/>
                </VStack>
            </HStack>
        </VStack>)
}

const styles = {
    itemTitle: {
        fontWeight: 'bold',
        fontSize: '24px',
        textAlign: 'center',
    },
    itemText: {
        fontSize: '16px',
        textAlign: 'center',
    },
    itemEmail: {
        fontSize: '16px',
        textAlign: 'center',
        textDecoration: 'underline',
    }
}

export default LandingPageMemberCard;
