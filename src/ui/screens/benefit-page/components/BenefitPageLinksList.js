import React, { useState } from 'react';
import { Button, Typography } from "@mui/material";
import IconButton from "@mui/material/IconButton";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Collapse from "@mui/material/Collapse";
import { HBox, VBox } from "../../../shared-components/LayoutBoxes";
import theme from '../../../../theme';
import OpenInNewIcon from '@mui/icons-material/OpenInNew';

const BenefitPageLinksList = ({ listTitle, data }) => {
    const [showAdditionalSupport, setShowAdditionalSupport] = useState(false);

    return (
        <VBox
            sx={{
                gap: theme.spacing(2),
                backgroundColor: theme.palette.white.main,
                padding: '32px',
                borderRadius: theme.shape.borderRadius,
            }}>
            <HBox sx={{ justifyContent: 'space-between', alignItems: "center", cursor: "pointer" }} onClick={() => setShowAdditionalSupport(!showAdditionalSupport)}>
                <Typography variant="h2" sx={{ fontWeight: '400', wordBreak: "break-word" }}>
                    {listTitle}</Typography>
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
                        <VBox sx={{ gap: 4, maxWidth: '800px' }}>
                            <Typography variant="body1">{data.title}</Typography>
                            {
                                data.links.length > 0 && (
                                    <VBox gap={1}>
                                        {
                                            data.links.map((link, index) => (
                                                <a key={index} href={link.url} target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none' }}>
                                                    <Button variant="text" sx={{
                                                        padding: 0, color: 'pink.main', textDecoration: 'underline',
                                                        '&:hover': {
                                                            backgroundColor: 'transparent',
                                                            color: 'black.main',
                                                            textDecoration: 'underline',
                                                        }
                                                    }}>
                                                        <HBox sx={{ alignItems: 'center' }} >
                                                            <OpenInNewIcon sx={{ fontSize: '20px' }} />
                                                            <Typography sx={{ color: "inherit" }} variant="body1">{link.title}</Typography>
                                                        </HBox>
                                                    </Button>
                                                </a>
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

export default BenefitPageLinksList;