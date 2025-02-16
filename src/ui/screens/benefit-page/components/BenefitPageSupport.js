import React, { useState } from 'react';
import { Button, Typography } from "@mui/material";
import IconButton from "@mui/material/IconButton";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Collapse from "@mui/material/Collapse";
import { HBox, VBox } from "../../../shared-components/LayoutBoxes";
import useTranslation from "../../../language/useTranslation";
import ContentBox from "../../../shared-components/ContentBox";
import theme from '../../../../theme';
import OpenInNewIcon from '@mui/icons-material/OpenInNew';

const BenefitPageSupport = ({ additionalSupport }) => {
    const { t } = useTranslation();
    const [showAdditionalSupport, setShowAdditionalSupport] = useState(false);

    return (
        <ContentBox sx={{ width: "100%" }}>
            <HBox sx={{ alignItems: "center", cursor: "pointer" }} onClick={() => setShowAdditionalSupport(!showAdditionalSupport)}>
                <Typography variant="h6">{t('app.benefitPage.additionalSupport')}</Typography>
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
                        <VBox gap={2}>
                            <Typography variant="body1">{additionalSupport.title}</Typography>
                            {
                                additionalSupport.links && (
                                    <VBox gap={1}>
                                        {
                                            additionalSupport.links.map((link, index) => (
                                                <a key={index} href={link.url} target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none', color: 'inherit' }}>
                                                    <Button variant="outlined">
                                                        <HBox gap={1}>
                                                            <OpenInNewIcon />
                                                            <Typography variant="body1">{link.title}</Typography>
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
        </ContentBox>
    );
}

export default BenefitPageSupport;