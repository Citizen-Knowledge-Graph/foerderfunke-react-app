import HStack from "../../../components/HStack";
import {Typography} from "@mui/material";
import React from "react";
import VStack from "../../../components/VStack";
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';

const LandingPageImageSection = () => {
    const quickCheckImage = `${process.env.PUBLIC_URL}/assets/images/family-stock-gpt4o.png`;

    return (
        <VStack gap={3} alignItems={'center'}>
            <HStack>
                <ChevronLeftIcon/>
                <ChevronRightIcon/>
            </HStack>
            <HStack justifyContent={'center'} sx={{position: "relative", width: '325px', overflow: 'hidden'}}>
                <img src={quickCheckImage} alt="Landing Page"
                     style={{width: "100%", height: "auto", borderRadius: "15px"}}/>
                <Typography
                    variant="h6"
                    component="div"
                    sx={{
                        position: 'absolute',
                        top: '90%',
                        left: '50%',
                        transform: 'translate(-50%, -50%)',
                        color: 'white',
                        backgroundColor: 'rgba(0, 0, 0, 0.7)', // semi-transparent background for better readability
                        padding: '8px',
                        borderRadius: '8px',
                        fontSize: '32px',
                    }}
                >
                    Kindergeld
                </Typography>
            </HStack>
        </VStack>
    );
}

export default LandingPageImageSection;
