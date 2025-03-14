import React, { useState } from 'react';
import EligibilityOverviewItemDetails from "./EligibilityOverviewItemDetails";
import { Add, Remove } from "@mui/icons-material";
import { IconButton, Typography, Box } from '@mui/material';
import { HBox, VBox } from '../../../shared-components/LayoutBoxes';

const EligibilityOverviewItem = ({ item, eligible, iconPath }) => {
    const [showDescription, setShowDescription] = useState(false);

    const toggleDescription = () => {
        setShowDescription(prevState => !prevState);
    };

    const marginBottom = showDescription ? '16px' : '0';
    const color = eligible === 'indeterminate' ? 'black.light' : 'black.main';

    return (
        <VBox sx={{ marginBottom: marginBottom }}>
            <HBox sx={{ alignItems: "center", width: '100%' }}>
                <img src={iconPath} alt="logo" style={{ width: "20px" }} />
                <HBox sx={{ width: '100%' }}>
                    <HBox sx={{ alignItems: 'center', gap:1, flexWrap: 'wrap' }}>
                        <Typography variant='h2' sx={{ color: color, fontWeight: '400', wordBreak: 'break-word' }} onClick={toggleDescription}>
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
                        {showDescription ? <Remove sx={{ color: color }} /> : <Add sx={{ color: color }} />}
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
