import React, { useState } from 'react';
import { Typography } from "@mui/material";
import IconButton from "@mui/material/IconButton";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Collapse from "@mui/material/Collapse";
import { HBox, VBox } from "../../../shared-components/LayoutBoxes";
import useTranslation from "../../../language/useTranslation";
import ContentPasteIcon from '@mui/icons-material/ContentPaste';
import ContentBox from "../../../shared-components/ContentBox";

const BenefitPageRequiredDocuments = ({ requiredDocuments }) => {
    const { t } = useTranslation();
    const [showRequiredDocuments, setShowRequiredDocuments] = useState(false);

    return (
        <ContentBox sx={{ width: "100%" }}>
            <HBox sx={{ alignItems: "center", cursor: "pointer" }} onClick={() => setShowRequiredDocuments(!showRequiredDocuments)}>
                <Typography variant="h6">{t('app.benefitPage.requiredDocuments')}</Typography>
                <IconButton
                    sx={{
                        transition: "transform 0.3s",
                        transform: showRequiredDocuments ? "rotate(180deg)" : "rotate(0deg)",
                        marginLeft: "8px",
                    }}
                >
                    <ExpandMoreIcon />
                </IconButton>
            </HBox>
            {
                showRequiredDocuments && (
                    <Collapse in={showRequiredDocuments}>
                        <VBox>
                            {requiredDocuments.map((doc, index) => (
                                <HBox key={index}>
                                    <ContentPasteIcon />
                                    <Typography variant="body1">{doc}</Typography>
                                </HBox>
                            ))}
                        </VBox>
                    </Collapse>
                )
            }
        </ContentBox>
    );
}

export default BenefitPageRequiredDocuments;