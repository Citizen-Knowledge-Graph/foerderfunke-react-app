import React from "react";
import {Typography} from "@mui/material";
import HStack from "../../../../../components/HStack";
import VStack from "../../../../../components/VStack";

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
                <VStack gap={1}>
                    <Typography sx={styles.itemTitle}>
                        {name}
                    </Typography>
                    <Typography sx={styles.itemText}>
                        {position}
                    </Typography>
                    <Typography sx={styles.itemEmail}>
                        {email}
                    </Typography>
                    <Typography sx={styles.itemEmail}>
                        {linkedin}
                    </Typography>
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
