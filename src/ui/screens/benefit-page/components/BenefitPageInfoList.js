import React, { useState } from 'react';
import { Typography } from "@mui/material";
import IconButton from "@mui/material/IconButton";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Collapse from "@mui/material/Collapse";
import { HBox, VBox } from "../../../shared-components/LayoutBoxes";
import theme from '../../../../theme';
import InfoIcon from '@mui/icons-material/Info';

const BenefitPageInfoList = ({ listTitle, data }) => {
    const [showAdditionalSupport, setShowAdditionalSupport] = useState(false);

    return (
        <VBox
            sx={{
                gap: theme.spacing(2),
                backgroundColor: theme.palette.white.main,
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
                    <Collapse in={showAdditionalSupport} sx={{ marginTop: theme.spacing(1) }}>
                        <VBox sx={{ gap: 2, maxWidth: '800px' }}>
                            <Typography variant="body1">{data.title}</Typography>
                            {
                                data.details.length > 0 && (
                                    <VBox gap={1}>
                                        {
                                            data.details.map((item, index) => (
                                                <HBox key={index} sx={{ alignItems: 'center' }} >
                                                    <InfoIcon sx={{ fontSize: '20px' }} />
                                                    <Typography sx={{ color: "inherit" }} variant="body1">{item}</Typography>
                                                </HBox>
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

export default BenefitPageInfoList;