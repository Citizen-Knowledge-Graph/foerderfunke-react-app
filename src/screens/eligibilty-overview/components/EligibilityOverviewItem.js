import React, {useState} from 'react';
import {IconButton, Typography} from '@mui/material';
import VStack from "../../../components/VStack";
import HStack from "../../../components/HStack";
import {green, red, grey} from "@mui/material/colors";
import {Circle, Add, Remove} from "@mui/icons-material";
import EligibilityOverviewItemDetails from "./EligibilityOverviewItemDetails";

const EligibilityOverviewItem = ({item, eligible}) => {
    const [showDescription, setShowDescription] = useState(false);

    const toggleDescription = () => {
        setShowDescription(prevState => !prevState);
    };

    const color = (eligible === 'eligible') ? green[500] : ((eligible === 'non-eligible') ? red[500] :
        grey[500]);

    return (
        <HStack justifyContent={'flex-start'} sx={{width: '100%'}}>
            <Circle sx={{color: color}}/>
            <HStack justifyContent={'space-between'} sx={{width: '100%'}}>
                <VStack gap={0} alignItems={'flex-start'}>
                    <Typography variant="body1" gutterBottom sx={styles.itemTitle}>
                        {item.title}
                    </Typography>
                    {showDescription && (
                        <EligibilityOverviewItemDetails item={item}/>
                    )}
                </VStack>
            </HStack>
            <VStack gap={0} alignItems={'flex-start'}>
                <IconButton onClick={toggleDescription} size="small" >
                    {showDescription ? <Remove sx={{color: 'black'}}/> : <Add sx={{color: 'black'}}/>}
                </IconButton>
            </VStack>
        </HStack>
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
