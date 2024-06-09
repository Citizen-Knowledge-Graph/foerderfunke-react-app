import React from 'react';
import {Typography} from '@mui/material';
import VStack from "../../../components/VStack";
import HStack from "../../../components/HStack";
import {yellow, blue} from "@mui/material/colors";

const data = [
    {
        id: "Kindergeld",
        title: 'Kindergeld',
    },
    {
        id: "Elterngeld",
        title: 'Elterngeld',
    },
    {
        id: "Wohngeld",
        title: 'Wohngeld',
    }
]

const EligibilityOverviewList = () => {
    return (
        <VStack gap={1} alignItems={'center'} sx={{width: '100%'}}>
            <VStack sx={{width: '100%'}}>
                <HStack justifyContent={'flex-start'} sx={{width: '100%'}}>
                    <Typography variant="h6" gutterBottom sx={styles.titleText}>
                        Berechtigt für:
                    </Typography>
                </HStack>
                <VStack gap={1} alignItems={'center'} sx={{width: '100%'}}>
                    {data.map((item) => (
                        <HStack justifyContent={'flex-start'} sx={{width: '100%'}}>
                            <Typography variant="body1" gutterBottom>
                                {item.title}
                            </Typography>
                        </HStack>
                    ))}
                </VStack>
            </VStack>
            <VStack sx={{width: '100%'}}>
                <HStack justifyContent={'flex-start'} sx={{width: '100%'}}>
                    <Typography variant="h6" gutterBottom sx={styles.titleText}>
                        Nicht berechtigt für:
                    </Typography>
                </HStack>
                <VStack gap={1} alignItems={'center'} sx={{width: '100%'}}>
                    {data.map((item) => (
                        <HStack justifyContent={'flex-start'} sx={{width: '100%'}}>
                            <Typography variant="body1" gutterBottom>
                                {item.title}
                            </Typography>
                        </HStack>
                    ))}
                </VStack>
            </VStack>
            <VStack sx={{width: '100%'}}>
                <HStack justifyContent={'flex-start'} sx={{width: '100%'}}>
                    <Typography variant="h6" gutterBottom sx={styles.titleText}>
                        Fehlende Informationen:
                    </Typography>
                </HStack>
                <VStack gap={1} alignItems={'center'} sx={{width: '100%'}}>
                    {data.map((item) => (
                        <HStack justifyContent={'flex-start'} sx={{width: '100%'}}>
                            <Typography variant="body1" gutterBottom>
                                {item.title}
                            </Typography>
                        </HStack>
                    ))}
                </VStack>
            </VStack>
        </VStack>
    );
};

const styles = {
    titleCard: {
        width: '100%',
        borderRadius: '0px',
        backgroundColor: yellow[100],
        boxShadow: 'none',
        padding: 0,
    },
    cardContent: {
        padding: '16px',
        "&:last-child": {
            paddingBottom: '16px',
        }
    },
    subTitleCard: {
        backgroundColor: blue[100],
        width: '100%',
        borderRadius: '0px',
        boxShadow: 'none',
        padding: 0,
    },
    titleText: {
        fontWeight: 'bold',
    },
    subTitleCardText: {
        fontSize: '12px',
        fontWeight: '400'
    }
};

export default EligibilityOverviewList;
