import React from "react";
import { Link } from "react-router-dom";
import { Typography, Button } from "@mui/material";
import FileDownloadIcon from "@mui/icons-material/FileDownload";
import DeleteIcon from "@mui/icons-material/Delete";
import Layout from "../../../shared-components/Layout";
import { VBox, HBox } from "../../../shared-components/LayoutBoxes";
import AppScreenWrapper from "../../../shared-components/AppScreenWrapper";
import useTranslation from "../../../language/useTranslation";
import theme from "../../../../theme";



const InfoScreenPrivacy = () => {
    const { t } = useTranslation();
    const privacyBox = `${process.env.PUBLIC_URL}/assets/images/application/privacy_box.svg`;

    return (
        <Layout isApp={true} logo={false} back="Back" >
            <AppScreenWrapper back={true}>
                <VBox sx={{ gap: theme.spacing(8) }}>
                    <Typography variant="h1">
                        {t('app.privacySite.header')}
                    </Typography>
                    <HBox>
                        <VBox sx={{ gap: theme.spacing(4) }}>
                            <VBox sx={{ maxWidth: '840px' }}>
                                <Typography variant="h4">
                                    {t('app.privacySite.subHeader')}
                                </Typography>
                                <Typography variant="body1">
                                    {t('app.privacySite.text1')}
                                </Typography>
                            </VBox>
                            <VBox sx={{
                                padding: theme.spacing(4),
                                borderRadius: theme.shape.borderRadius,
                                backgroundColor: theme.palette.white.main,
                                maxWidth: '506px',
                            }}>
                                <VBox>
                                    <Typography variant="body1" sx={{ fontWeight: 'bold' }}>
                                        {t('app.privacySite.optionHeader')}
                                    </Typography>
                                    <HBox alignItems={'center'}>
                                        <FileDownloadIcon sx={{ color: theme.palette.custom.darkGrey, fontSize: '16px' }} />
                                        <Typography variant="body1">
                                            {t('app.privacySite.option1')}
                                        </Typography>
                                    </HBox>
                                    <HBox alignItems={'center'}>
                                        <DeleteIcon sx={{ color: theme.palette.custom.darkGrey, fontSize: '16px' }} />
                                        <Typography variant="body1">
                                            {t('app.privacySite.option2')}
                                        </Typography>
                                    </HBox>
                                </VBox>
                            </VBox>
                            <HBox>
                                <Button
                                    sx={{
                                        padding: "16px 28px",
                                        backgroundColor: theme.palette.blue.dark,
                                        color: theme.palette.white.main,
                                    }}
                                    variant="contained"
                                    component={Link}
                                    to={'/onboarding-choice'}>
                                    <Typography variant="body1" sx={{ color: 'inherit' }}>
                                        {t('app.privacySite.button')}
                                    </Typography>
                                </Button>
                            </HBox>
                        </VBox>
                        <VBox sx={{ justifyContent: 'flex-end' }}>
                            <img src={privacyBox} alt="logo" style={{ 
                                width: "315px",
                                marginRight: "-50px",
                                marginBottom: "-50px"
                            }} />
                        </VBox>
                    </HBox>
                </VBox>
            </AppScreenWrapper>
        </Layout >
    );
}

export default InfoScreenPrivacy;
