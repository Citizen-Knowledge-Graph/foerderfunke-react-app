import React, { useState } from 'react';
import { Typography } from "@mui/material";
import IconButton from "@mui/material/IconButton";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Collapse from "@mui/material/Collapse";
import { HBox, VBox } from "../../../shared-components/LayoutBoxes";
import useTranslation from "../../../language/useTranslation";
import ContentPasteIcon from '@mui/icons-material/ContentPaste';
import theme from '../../../../theme';

const BenefitPageRequiredDocuments = ({ requiredDocuments }) => {
    const { t } = useTranslation();
    const [showRequiredDocuments, setShowRequiredDocuments] = useState(false);

    return (
        <VBox
            sx={{
                gap: theme.spacing(2),
                backgroundColor: theme.palette.white.main,
                padding: '32px',
                borderRadius: theme.shape.borderRadius,
            }}
        >
            <HBox sx={{ justifyContent: 'space-between', alignItems: "center", cursor: "pointer" }} onClick={() => setShowRequiredDocuments(!showRequiredDocuments)}>
                <Typography variant="h2" sx={{ fontWeight: '400', wordBreak: "break-word" }}>
                    {t('app.benefitPage.requiredDocuments')}</Typography>
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
                    <Collapse in={showRequiredDocuments} sx={{ marginTop: theme.spacing(1) }}>
                        <VBox sx={{ maxWidth: '800px' }}>
                            {requiredDocuments.map((doc, index) => (
                                <HBox key={index}>
                                    <ContentPasteIcon />
                                    <Typography sx={{
                                        '&:hover': {
                                            color: 'white',
                                        }
                                    }}

                                        variant="body1">{doc}</Typography>
                                </HBox>
                            ))}
                        </VBox>
                    </Collapse>
                )
            }
        </VBox>
    );
}

export default BenefitPageRequiredDocuments;