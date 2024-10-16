import React from "react";
import HStack from "../../../../../components/HStack";
import {Typography} from "@mui/material";

const LandingPageBenefitsCardDesktop = ({benefit, isHovered, onMouseEnter, onMouseLeave}) => {
    const benefitImage = `${process.env.PUBLIC_URL}/assets/images/benefit-cards/${benefit.url}`;

    return (
        <HStack
            justifyContent={'center'}
            sx={{
                position: "relative",
                width: isHovered ? '325px' : '75px',
                height: '500px',
                overflow: 'hidden',
                transition: 'width 0.3s ease-in-out'
            }}
            onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave}
        >
            <img
                src={benefitImage}
                alt="Landing Page"
                style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    borderRadius: "15px"
                }}/>
            {
                isHovered ? (
                    <HStack
                        justifyContent={'center'}
                        sx={{
                            position: 'absolute',
                            bottom: 25,
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
                ) : (
                    <HStack
                        justifyContent={'flex-end'}
                        alignItems={'flex-end'}
                        sx={{
                            position: 'absolute',
                            left: 0,
                            width: '100%',
                            backgroundColor: 'rgba(0, 0, 0, 0.0)',
                            color: 'white',
                            writingMode: 'vertical-rl',
                            textAlign: 'center',
                            padding: '10px',
                            transition: 'all 0.3s ease-in-out',
                        }}
                    >
                        <Typography sx={styles.benefitTitle}>{benefit.name}</Typography>
                    </HStack>
                )
            }
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

export default LandingPageBenefitsCardDesktop;
