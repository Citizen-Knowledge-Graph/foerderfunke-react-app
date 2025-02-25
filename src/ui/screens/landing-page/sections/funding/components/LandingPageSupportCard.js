import React, { useState } from "react";
import { Typography, Collapse } from "@mui/material";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import { VBox, HBox } from "../../../../../shared-components/LayoutBoxes";
import theme from "../../../../../../theme";

const LandingPageSupportCard = ({ header, text, logo1, logo2, disclaimer = null }) => {
    const [showDisclaimer, setShowDisclaimer] = useState(false);

    return (
        <VBox sx={{
            maxWidth: '506px',
            padding: theme.spacing(4),
            backgroundColor: `${theme.palette.white.dark}40`,
            borderRadius: theme.shape.borderRadius,
            boxShadow: `0px 1px 2px ${theme.palette.black.main}40`,
            gap: theme.spacing(1),
            alignItems: 'center'
        }}>
            <VBox sx={{
                gap: theme.spacing(4),
                alignItems: 'center'
            }}>
                <Typography variant="h4" sx={{ fontWeight: 400, color: theme.palette.pink.main }}>
                    {header}
                </Typography>
                <Typography variant="body1">
                    {text}
                </Typography>
                <HBox sx={{ justifyContent: 'center', gap: theme.spacing(12) }}>
                    <VBox justifyContent={'center'} alignItems={'center'} sx={{ width: "100px", height: "100px" }}>
                        <img src={logo1} alt={'Prototype Fund Logo'}
                            style={{ maxWidth: "100px", maxHeight: "100px" }} />
                    </VBox>
                    <VBox justifyContent={'center'} alignItems={'center'} sx={{ width: "100px", height: "100px" }}>
                        <img src={logo2} alt={'BMBF Logo'} style={{ maxWidth: "100px", maxHeight: "100px" }} />
                    </VBox>
                </HBox>
            </VBox>
            {disclaimer && (
                <HBox sx={{ width: "100%" }}>
                    <VBox sx={{ alignItems: "flex-start", width: "100%" }}>
                        <HBox sx={{ alignItems: 'center', justifyContent: 'center' }}
                            onClick={() => setShowDisclaimer(!showDisclaimer)}>
                            <KeyboardArrowDownIcon
                                sx={{
                                    fontSize: 16,
                                    transition: "transform 0.3s",
                                    transform: showDisclaimer ? "rotate(180deg)" : "rotate(0deg)"
                                }}
                            />
                            <Typography variant="body2">
                                Disclaimer
                            </Typography>
                        </HBox>
                        {
                            showDisclaimer && (
                                <Collapse in={showDisclaimer}>
                                    <Typography variant="body2">
                                        {disclaimer}
                                    </Typography>
                                </Collapse>
                            )
                        }
                    </VBox>
                </HBox>
            )}
        </VBox >
    );
}

export default LandingPageSupportCard;
