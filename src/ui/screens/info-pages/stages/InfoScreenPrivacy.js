import React from "react";
import { Link } from "react-router-dom";
import { Typography, Button } from "@mui/material";
import FileDownloadIcon from "@mui/icons-material/FileDownload";
import DeleteIcon from "@mui/icons-material/Delete";
import Layout from "../../../shared-components/Layout";
import { VBox, HBox } from "../../../shared-components/LayoutBoxes";
import ContentBox from "../../../shared-components/ContentBox";
import AppScreenWrapper from "../../../shared-components/AppScreenWrapper";
import useTranslation from "../../../language/useTranslation";
import theme from "../../../../theme";

const InfoScreenPrivacy = () => {
    const { t } = useTranslation();

    return (
        <Layout isApp={true} logo={false} back="Back" >
            <AppScreenWrapper back={true}>
                <VBox sx={{ gap: theme.spacing(4) }}>
                    <VBox sx={{ alignItems: "center" }}>
                        <Typography variant="h4">
                            {t('app.privacySite.header')}
                        </Typography>
                    </VBox>
                    <VBox>
                        <Typography variant="body1">
                            {t('app.privacySite.text1')}
                        </Typography>
                    </VBox>
                    <ContentBox sx={{ backgroundColor: theme.palette.primary.light }}
                    >
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
                    </ContentBox>
                    <Button
                        sx={{ padding: theme.spacing(2) }}
                        variant="contained"
                        component={Link}
                        to={'/onboarding-choice'}>
                        <Typography variant="body1" sx={{ fontWeight: 'bold' }}>
                            {t('app.privacySite.button')}
                        </Typography>
                    </Button>
                </VBox>
            </AppScreenWrapper>
        </Layout >
    );
}

export default InfoScreenPrivacy;
