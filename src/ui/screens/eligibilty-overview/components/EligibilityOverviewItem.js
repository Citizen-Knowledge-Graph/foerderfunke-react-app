import React, { useState } from 'react';
import EligibilityOverviewItemDetails from "./EligibilityOverviewItemDetails";
import { green, red, grey } from "@mui/material/colors";
import { Circle, Add, Remove } from "@mui/icons-material";
import { IconButton, Typography, Box } from '@mui/material';
import { HBox, VBox } from '../../../shared-components/LayoutBoxes';

const EligibilityOverviewItem = ({ item, eligible }) => {
    const [showDescription, setShowDescription] = useState(false);

    const toggleDescription = () => {
        setShowDescription(prevState => !prevState);
    };

    const marginBottom = showDescription ? '16px' : '0';
    const fontWeight = showDescription ? 'bold' : '400';
    const color = (eligible === 'eligible') ? green[500] : ((eligible === 'non-eligible') ? red[500] :
        grey[500]);

    return (
        <VBox sx={{ marginBottom: marginBottom }}>
            <HBox sx={{ alignItems: "center", width: '100%' }}>
                <Circle sx={{ color: color }} />
                <HBox sx={{ width: '100%' }}>
                    <HBox sx={{ alignItems: 'center' }}>
                        <Typography variant='h5' sx={{ fontWeight: fontWeight }} onClick={toggleDescription}>
                            {item.title}
                        </Typography>
                        {item.status === "beta" && (
                            <Typography variant='body1' sx={{ color: 'warning.main' }}>
                                Beta
                            </Typography>
                        )}
                    </HBox>
                </HBox>
                <Box>
                    <IconButton onClick={toggleDescription} size="small" >
                        {showDescription ? <Remove sx={{ color: 'black' }} /> : <Add sx={{ color: 'black' }} />}
                    </IconButton>
                </Box>
            </HBox>
            {showDescription && (
                <EligibilityOverviewItemDetails item={item} eligible={eligible} />
            )}
        </VBox>
    );
};

export default EligibilityOverviewItem;
