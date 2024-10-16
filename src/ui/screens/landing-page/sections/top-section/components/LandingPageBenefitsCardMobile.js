import React from "react";
import HStack from "../../../../../components/HStack";
import {Typography} from "@mui/material";

const LandingPageBenefitsCardMobile = ({benefit, isTransitioning}) => {
    const benefitImage = `${process.env.PUBLIC_URL}/assets/images/benefit-cards/${benefit.url}`;

    return (
        <HStack
            justifyContent={'center'}
            sx={{
                position: "relative",
                width: '325px',
                height: '100%',
                overflow: 'hidden',
                transition: 'opacity 0.3s ease-in-out',
                opacity: isTransitioning ? 0 : 1,
        }}
        >
            <img
                src={benefitImage}
                alt="Landing Page"
                style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    borderRadius: "15px"
                }}
            />
            <HStack
                justifyContent={'center'}
                sx={{
                    position: 'absolute',
                    top: 25,
                    width: '100%',
                    backgroundColor: 'rgba(0, 0, 0, 0.0)',
                    color: 'white',
                    textAlign: 'center',
                    padding: '10px',
                    transition: 'all 0.3s ease-in-out',
                }}
            >
                <Typography sx={styles.benefitTitle}>{benefit.name}</Typography>
            </HStack>
        </HStack>
    );
}

const styles = {
    benefitTitle: {
        fontSize: '28px',
        fontWeight: 'bold',
        textAlign: 'center',
    }
}

export default LandingPageBenefitsCardMobile;
