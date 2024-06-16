import React, { useState } from 'react';
import {Typography} from '@mui/material';
import VStack from "../../../components/VStack";
import HStack from "../../../components/HStack";
import {green, red, grey} from "@mui/material/colors";
import { Circle, Add, Remove } from "@mui/icons-material";

const EligibilityOverviewItem = ({items, eligble}) => {
    const [visibleDescriptions, setVisibleDescriptions] = useState({});

    const toggleDescription = (index) => {
        setVisibleDescriptions(prevState => ({
            ...prevState,
            [index]: !prevState[index]
        }));
    };

    const color = (eligble === 'eligible') ? green[500] : ((eligble === 'non-eligible') ? red[500] :
        grey[500]);
    const headerText = (eligble === 'eligible') ? 'Berechtigt für:' : ((eligble === 'non-eligible') ? 'Nicht berechtigt für:' :
        'Unklar für:');


    return (
        <VStack sx={{width: '100%'}}>
            <HStack justifyContent={'flex-start'} sx={{width: '100%'}}>
                <Typography variant="h6" gutterBottom sx={styles.titleText}>
                    {headerText}
                </Typography>
            </HStack>
            <VStack gap={1} alignItems={'center'} sx={{width: '100%'}}>
                {items.map((item, index) => (
                    <HStack key={index} justifyContent={'flex-start'} sx={{width: '100%'}}>
                        <Circle sx={{color: color}}/>
                        <HStack justifyContent={'space-between'} sx={{width: '100%'}}>
                            <VStack gap={0} alignItems={'flex-start'}>
                                <Typography variant="body1" gutterBottom sx={styles.itemTitle}>
                                    {item.title}
                                </Typography>
                                {
                                    showDescription ? (
                                        <Typography variant="body2" gutterBottom>
                                            {item.description}
                                        </Typography>
                                    ) : null
                                }
                            </VStack>
                        </HStack>
                        <Add/>
                    </HStack>
                ))}
            </VStack>
        </VStack>

    );
};

const styles = {
    titleText: {
        fontWeight: 'bold',
    },
    itemTitle: {
        fontWeight: 'bold',
    }
};

export default EligibilityOverviewItem;
