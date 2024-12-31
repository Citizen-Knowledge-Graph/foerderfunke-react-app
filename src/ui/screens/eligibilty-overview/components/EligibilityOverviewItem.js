import React, { useState } from 'react';
import { IconButton, Typography, Box } from '@mui/material';
import { HBox, VBox } from '../../../shared-components/LayoutBoxes';
import { green, red, grey } from "@mui/material/colors";
import { Circle, Add, Remove } from "@mui/icons-material";
import EligibilityOverviewItemDetails from "./EligibilityOverviewItemDetails";

const EligibilityOverviewItem = ({ item, eligible }) => {
    const [showDescription, setShowDescription] = useState(false);

    const toggleDescription = () => {
        setShowDescription(prevState => !prevState);
    };

    const bottomMargin = showDescription ? '16px' : '0';
    const fontWeight = showDescription ? 'bold' : '400';
    const color = (eligible === 'eligible') ? green[500] : ((eligible === 'non-eligible') ? red[500] :
        grey[500]);

    return (
        <HBox sx={{ width: '100%', marginBottom: bottomMargin }}>
            <Circle sx={{ color: color }} />
            <HBox sx={{ width: '100%' }}>
                <VBox>
                    <Typography variant='h6' sx={{ fontWeight: fontWeight }} onClick={toggleDescription}>
                        {item.title}
                    </Typography>
                    {showDescription && (
                        <EligibilityOverviewItemDetails item={item} eligible={eligible} />
                    )}
                </VBox>
            </HBox>
            <Box>
                <IconButton onClick={toggleDescription} size="small" >
                    {showDescription ? <Remove sx={{ color: 'black' }} /> : <Add sx={{ color: 'black' }} />}
                </IconButton>
            </Box>
        </HBox>
    );
};

export default EligibilityOverviewItem;
