import React from 'react';
import {Typography} from '@mui/material';
import VStack from "../../../components/VStack";
import HStack from "../../../components/HStack";
import {green, red, grey} from "@mui/material/colors";
import {Circle, Add} from "@mui/icons-material";

const EligibilityOverviewList = ({items, eligble}) => {
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
                    <HStack key={index} justifyContent={'space-between'} sx={{width: '100%'}}>
                        <HStack justifyContent={'flex-start'}>
                            <Circle sx={{color: color}}/>
                            <Typography variant="body1" gutterBottom sx={styles.itemTitle}>
                                {item.title}
                            </Typography>
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

export default EligibilityOverviewList;
