import React, { useState } from 'react';
import { Typography } from "@mui/material";
import IconButton from "@mui/material/IconButton";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Collapse from "@mui/material/Collapse";
import { HBox, VBox } from "@/ui/shared-components/LayoutBoxes";
import theme from '@/theme';

const BenefitPageExampleList = ({ listTitle, data }) => {
    const [showAdditionalSupport, setShowAdditionalSupport] = useState(false);

    return (
        <VBox
            sx={{
                gap: 2,
                backgroundColor: 'white.main',
                padding: '32px',
                borderRadius: theme.shape.borderRadius,
            }}
        >
            <HBox sx={{ justifyContent: 'space-between', alignItems: "center", cursor: "pointer"}} onClick={() => setShowAdditionalSupport(!showAdditionalSupport)}>
                <Typography variant="h2" sx={{ fontWeight: '400', wordBreak: "break-word" }}>
                    {listTitle}
                </Typography>
                <IconButton
                    sx={{
                        transition: "transform 0.3s",
                        transform: showAdditionalSupport ? "rotate(180deg)" : "rotate(0deg)",
                        marginLeft: "8px",
                    }}
                >
                    <ExpandMoreIcon />
                </IconButton>
            </HBox>
            {
                showAdditionalSupport && (
                    <Collapse in={showAdditionalSupport} sx={{ marginTop: 1 }}>
                        <VBox sx={{ gap: 4, maxWidth: '800px' }}>
                            <Typography variant="body1">{data.title}</Typography>
                            {
                                data.examples?.length > 0 && (
                                    <VBox gap={4}>
                                        {
                                            data.examples.map((item, index) => (
                                                <VBox key={index}>
                                                    <Typography sx={{ color: "inherit", fontWeight: 'bold' }} variant="body1">{item.title}</Typography>
                                                    <Typography sx={{ color: "inherit" }} variant="body1">{item.text}</Typography>
                                                </VBox>
                                            ))
                                        }
                                    </VBox>
                                )
                            }
                        </VBox>
                    </Collapse>
                )
            }
        </VBox>
    );
}

export default BenefitPageExampleList;